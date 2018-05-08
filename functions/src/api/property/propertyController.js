const propertyService = require('./propertyService')

const getPropertyById = (resultName, req, res) => {
  let { id } = req.params

  _execute(propertyService.getPropertyDataById(id), resultName, res)
}

const getPropertiesByConditions = (resultName, req, res) => {
  let query = req.query
  let { conditions, params } = _extractQueryArguments(query)
  
  params.orderBy = params.orderBy || 'projectName'

  _execute(propertyService.getPropertiesDataByConditions(conditions, params), resultName, res)
}

const getPropertiesSummary = (resultName, req, res) => {
  let query = req.query
  let { conditions, params } = _extractQueryArguments(query)

  _execute(propertyService.getPropertiesSummaryData(conditions, params), resultName, res)
}

const saveProperty = (resultName, req, res) => {
  let { id } = req.params
  let data = req.body

  _execute(propertyService.savePropertyData(id, data), resultName, res)
}

const saveMultipleProperties = (resultName, req, res) => {
  let data = req.body

  _execute(propertyService.saveMultiplePropertyData(data), resultName, res)
}

const deletePropertyById = (resultName, req, res) => {
  let { id } = req.params

  _execute(propertyService.deletePropertyDataById(id), resultName, res)
}

const deletePropertiesByConditions = (resultName, req, res) => {
  let query = req.query
  let { ids, conditions, params } = _extractQueryArguments(query)

  if (ids) {
    _execute(propertyService.deletePropertiesDataByIdList(ids.split(',')), resultName, res)
  }
  else {
    _execute(propertyService.deletePropertiesDataByConditions(conditions, params), resultName, res)
  }
}

const _extractQueryArguments = (query) => {
  let { ids, start, end, orderBy, limit, ...conditions } = query

  let params = {
    start,
    end,
    orderBy,
    limit
  }

  return { ids, conditions, params }
}

const _execute = (query, resultName, res) => {
  query
    .then(data => {
      return res.json({
        status: true,
        [resultName]: data
      })
    })
    .catch(err => {
      res.json({
        status: false,
        error: err.message
      })
    })
}

module.exports = {
  getPropertyById,
  getPropertiesByConditions,
  getPropertiesSummary,
  saveProperty,
  saveMultipleProperties,
  deletePropertyById,
  deletePropertiesByConditions
}
