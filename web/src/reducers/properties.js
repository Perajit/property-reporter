import {
  GET_PROPERTIES_SUCCESS,
  SAVE_PROPERTY_SUCCESS,
  DELETE_PROPERTIES_SUCCESS
} from 'constants/actionTypes'

const initialState = []

const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROPERTIES_SUCCESS:
      return action.properties

    case SAVE_PROPERTY_SUCCESS:
      let { savedProperty } = action
      let index = state.findIndex(item => item.id === savedProperty.id)

      return index < 0 ?
        state.concat(action.savedProperty)
        : state.slice(0, index).concat(savedProperty).concat(state.slice(index + 1))

    case DELETE_PROPERTIES_SUCCESS:
      return state.filter((item) => action.deletedProperties.indexOf(item.id) < 0)

    default:
      return state
  }
}

export default propertiesReducer
