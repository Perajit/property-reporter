const express = require('express')
const propertyController = require('./propertyController')

const router = express.Router()

router.get('/:id', (req, res) => {
  propertyController.getPropertyById('property', req, res)
})
router.get('', (req, res) => {
  propertyController.getPropertiesByConditions('properties', req, res)
})
router.post('', (req, res) => {
  propertyController.saveMultipleProperties('savedProperties', req, res)
})
router.put('/:id', (req, res) => {
  propertyController.saveProperty('savedProperty', req, res)
})
router.delete('/:id', (req, res) => {
  propertyController.deletePropertyById('deletedProperty', req, res)
})
router.delete('', (req, res) => {
  propertyController.deletePropertiesByConditions('deletedProperties', req, res)
})

module.exports = router
