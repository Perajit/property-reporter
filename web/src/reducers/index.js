import { combineReducers } from 'redux'
import properties from './properties'
import propertySummary from './propertySummary'

const rootReducer = combineReducers({
  properties,
  propertySummary
})

export default rootReducer
