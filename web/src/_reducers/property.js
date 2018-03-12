import {
  GET_PROPERTIES_SUCCESS
} from 'constants/actionTypes'

const initialState = {}

const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROPERTIES_SUCCESS:
      return action.properties
    default:
      return state
  }
}

export default propertyReducer
