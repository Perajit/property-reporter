const propertyRouter = require('./propertyRouter')

const propertyApi = (app) => {
  app.use('/api/properties', propertyRouter)
}

module.exports = propertyApi
