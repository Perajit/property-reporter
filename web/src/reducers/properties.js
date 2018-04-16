import {
  GET_PROPERTIES_SUCCESS,
  DELETE_PROPERTIES_SUCCESS,
  SAVE_PROPERTY_SUCCESS
} from 'constants/actionTypes'

const initialState = []

const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROPERTIES_SUCCESS:
      return action.properties

    case DELETE_PROPERTIES_SUCCESS:
      let { ids } = action
      
      return state.filter((item) => ids.indexOf(item.id) < 0)

    case SAVE_PROPERTY_SUCCESS:
      let { savedProperty } = action
      let index = state.findIndex(item => item.id === savedProperty.id)

      return index < 0 ?
        state.concat(savedProperty)
        : state.slice(0, index).concat(savedProperty).concat(state.slice(index + 1))

    default:
      return state
  }
}

export default propertiesReducer
