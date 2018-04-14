import { combineReducers } from 'redux'
import properties from './properties'
import property from './property'
import propertySummary from './propertySummary'

const rootReducer = combineReducers({
  properties,
  property,
  propertySummary
})

export default rootReducer
