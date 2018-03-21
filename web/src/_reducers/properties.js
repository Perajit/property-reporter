import {
  GET_PROPERTIES_SUCCESS,
  DELETE_PROPERTIES_SUCCESS
} from 'constants/actionTypes'

const initialState = []

const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROPERTIES_SUCCESS:
      return action.properties
    case DELETE_PROPERTIES_SUCCESS:
      return state.filter((item) => action.deletedProperties.indexOf(item.id) < 0)
    default:
      return state
  }
}

export default propertiesReducer
