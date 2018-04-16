import { combineReducers } from 'redux'
import properties from './properties'
import property from './property'
import propertySummary from './propertySummary'
import propertiesProgress from './propertiesProgress'
import propertyProgress from './propertyProgress'
import propertySummaryProgress from './propertySummaryProgress'

const rootReducer = combineReducers({
  properties,
  property,
  propertySummary,
  propertiesProgress,
  propertyProgress,
  propertySummaryProgress
})

export default rootReducer
