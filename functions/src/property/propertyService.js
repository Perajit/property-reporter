const admin = require('firebase-admin')
const _ = require('lodash')

const db = admin.firestore()
const collectionRef = db.collection('properties')

const getPropertyDataById = (id) => {
  return _getDocById(id).get()
    .then((doc) => {
      return doc.exists ? doc.data() : null
    })
}

const getPropertiesDataByConditions = (conditions, params) => {
  return _queryByConditions(conditions, params)
    .then((snapshot) => _getDataListFromSnapshot(snapshot))
}

const getPropertiesSummaryData = (conditions, params) => {
  return _queryByConditions(conditions, params)
    .then((snapshot) => _getSummaryDataFromSnapshot(snapshot))
}

const savePropertyData = (id, data, batch) => {
  let {
    price,
    submittedTime
  } = data

  // Ensure valid price
  if (price) {
    data.price = Number(price)
  }

  // Ensure valid submitted date
  if (submittedTime) {
    data.submittedTime = _getTimestampString(submittedTime)
  }

  // Force update last updated time
  data.lastUpdatedTime = String(Number(new Date()))

  return _saveDocById(id, data, batch)
}

const saveMultiplePropertyData = (list) => {
  let batch = db.batch()

  list.forEach((item) => {
    savePropertyData(item.id, item, batch)
  })

  return batch.commit()
}

const deletePropertyDataById = (id) => {
  return _deleteDocById(id)
}

const deletePropertiesDataByIdList = (idList) => {
  let batch = db.batch()

  idList.forEach((id) => {
    _deleteDocById(id, batch)
  })

  return batch.commit()
}

const deletePropertiesDataByConditions = (conditions, params) => {
  let batch = db.batch()

  return _queryByConditions(conditions, params)
    .then(snapshot => {
      snapshot.forEach(doc => {
        _deleteDocById(doc.data().id, batch)
      })

      return batch.commit()
    })
}

const _getDocById = (id) => {
  return collectionRef.doc(id)
}

const _saveDocById = (id, data, batch) => {
  // Assumption: id will never change from the orignal one, no worry about id conflict
  let saveOptions = { merge: true }
  let docRef = _getDocById(id)

  return batch ? batch.set(docRef, data, saveOptions) : docRef.set(data, saveOptions)
}

const _deleteDocById = (id, batch) => {
  let docRef = _getDocById(id)

  return batch ? batch.delete(docRef) : docRef.delete()
}

const _queryByConditions = (conditions, params) => {
  let query = _getQueryByConditions(conditions, params)

  return query.get()
}

const _getQueryByConditions = (conditions, params) => {
  let {
    start,
    end,
    orderBy,
    limit
  } = params

  let query = collectionRef

  for (let key in conditions) {
    let value = conditions[key]
    query = query.where(key, '==', value)
  }

  if (start) {
    let startTime = _getTimestampString(start)
    query = query.where('lastUpdatedTime', '>=', startTime)
  }

  if (end) {
    let endTime =  _getTimestampString(end)
    query = query.where('lastUpdatedTime', '<=', endTime)
  }

  if (orderBy) {
    query = query.orderBy(...orderBy.split(':'))
  }

  limit = Number(limit)
  if (limit > 0) {
    query = query.limit(limit)
  }

  return query
}

const _getTimestampString = (value) => {
  let timestamp = null

  if (value) {
    if (isNaN(value)) {
      value = new Date(value)
    }

    if (!isNaN(value)) {
      timestamp = String(Number(value))
    }
  }

  return timestamp
}

const _getDataListFromSnapshot = (snapshot) => {
  let list = []
  let unknownProjectList = []

  snapshot.forEach((doc) => {
    let data = doc.data()
    let targetList = data.projectName ? list : unknownProjectList

    targetList.push(data)
  })

  return list.concat(unknownProjectList)
}

const _getSummaryDataFromSnapshot = (snapshot) => {
  let summaryList = []
  let unknownProjectSummary = null
  let overallTotalItems = 0
  let overallStats = null

  let dataGroups = _getDataGroupsFromSnapshot(snapshot)
  
  _.forOwn(dataGroups, (items, projectName) => {
    let totalItems = items.length
    let groupStats = _calculateGroupStats(items)
    let summary = {
      projectName,
      totalItems,
      priceSummary: {
        min: groupStats.minPrice,
        max: groupStats.maxPrice,
        avg: groupStats.sumPrice / totalItems
      },
      ppsSummary: {
        min: groupStats.minPps,
        max: groupStats.maxPps,
        avg: groupStats.sumPps / totalItems
      }
    }

    if (projectName) {
      summaryList.push(summary)
    }
    else {
      unknownProjectSummary = summary
    }

    // Calculate overall
    overallTotalItems += totalItems
    overallStats = _calculateNewStats(overallStats, groupStats)
  })

  if (unknownProjectSummary) {
    summaryList.push(unknownProjectSummary)
  }

  let overallSummary = {
    totalItems: overallTotalItems,
    priceSummary: overallStats && {
      min: overallStats.minPrice,
      max: overallStats.maxPrice,
      avg: overallStats.sumPrice / overallTotalItems
    },
    ppsSummary: overallStats && {
      min: overallStats.minPps,
      max: overallStats.maxPps,
      avg: overallStats.sumPps / overallTotalItems
    }
  }

  return { list: summaryList, overall: overallSummary }
}

const _getDataGroupsFromSnapshot = (snapshot) => {
  let groups = {}

  snapshot.forEach((doc) => {
    let data = doc.data()
    let groupKey = data.projectName || ''

    groups[groupKey] = groups[groupKey] || []
    groups[groupKey].push(data)
  })

  return groups
}

const _calculateGroupStats = (items) => {
  return items.reduce((existingStats, item) => {
    let { price, size } = item
    let pps = Math.round(price / size)
    let addlStats = {
      minPrice: price,
      maxPrice: price,
      sumPrice: price,
      minPps: pps,
      maxPps: pps,
      sumPps: pps
    }

    return _calculateNewStats(existingStats, addlStats)
  }, null)
}

const _calculateNewStats = (existingStats, addlStats) => {
  let newStats

  if (existingStats) {
    let { minPrice, maxPrice, sumPrice, minPps, maxPps, sumPps } = existingStats
    let addlMinPrice = addlStats.minPrice
    let addlMaxPrice = addlStats.maxPrice
    let addlMinPps = addlStats.minPps
    let addlMaxPps = addlStats.maxPps

    if (addlMinPrice < minPrice) {
      minPrice = addlMinPrice
    }
    if (addlMaxPrice > maxPrice) {
      maxPrice = addlMaxPrice
    }
    if (addlMinPps < minPps) {
      minPps = addlMinPps
    }
    if (addlMaxPps > maxPps) {
      maxPps = addlMaxPps
    }

    newStats = {
      minPrice,
      maxPrice,
      sumPrice: sumPrice + addlStats.sumPrice,
      minPps,
      maxPps,
      sumPps: sumPps + addlStats.sumPps
    }
  }
  else {
    newStats = Object.assign({}, addlStats)
  }

  return newStats
}

module.exports = {
  getPropertyDataById,
  getPropertiesDataByConditions,
  getPropertiesSummaryData,
  savePropertyData,
  saveMultiplePropertyData,
  deletePropertyDataById,
  deletePropertiesDataByIdList,
  deletePropertiesDataByConditions
}
