const admin = require('firebase-admin')

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
    .then((snapshot) => _getDataGroupsFromSnapshot(snapshot, 'projectName'))
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

const deleteMultiplePropertyData = (idList) => {
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
  const saveOptions = { merge: true }
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
    query = query.where(key, '==', conditions[key])
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

const _getDataGroupsFromSnapshot = (snapshot, groupBy) => {
  let groups = {}

  snapshot.forEach((doc) => {
    let data = doc.data()
    let groupKey = data[groupBy] || ''

    groups[groupKey] = groups[groupKey] || []
    groups[groupKey].push(data)
  })

  return groups
}

module.exports = {
  getPropertyDataById,
  getPropertiesDataByConditions,
  savePropertyData,
  saveMultiplePropertyData,
  deletePropertyDataById,
  deletePropertiesDataByConditions
}
