import { combineReducers } from 'redux'
import propertyReducer from './property'

const rootReducer = combineReducers({
  properties: propertyReducer
})

export default rootReducer
