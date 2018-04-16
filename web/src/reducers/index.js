import { combineReducers } from 'redux'
import properties from './properties'
import property from './property'
import propertySummary from './propertySummary'
import propertiesProgress from './propertiesProgress'
import propertySummaryProgress from './propertySummaryProgress'

const rootReducer = combineReducers({
  properties,
  property,
  propertySummary,
  propertiesProgress,
  propertySummaryProgress
})

export default rootReducer
