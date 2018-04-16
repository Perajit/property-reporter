import {
  GET_PROPERTIES_REQUEST,
  GET_PROPERTIES_SUCCESS,
  GET_PROPERTIES_FAILURE,
  
  SAVE_PROPERTY_REQUEST,
  SAVE_PROPERTY_SUCCESS,
  SAVE_PROPERTY_FAILURE,

  DELETE_PROPERTIES_REQUEST,
  DELETE_PROPERTIES_SUCCESS,
  DELETE_PROPERTIES_FAILURE
} from 'constants/actionTypes'

const initialState = {
  isFetching: false,
  error: null
}

const propertiesProgressReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROPERTIES_REQUEST:
    case SAVE_PROPERTY_REQUEST:
    case DELETE_PROPERTIES_REQUEST:
      return {
        isFetching: true,
        error: null
      }

    case GET_PROPERTIES_SUCCESS:
    case SAVE_PROPERTY_SUCCESS:
    case DELETE_PROPERTIES_SUCCESS:
      return {
        isFetching: false,
        error: null
      }

    case GET_PROPERTIES_FAILURE:
    case SAVE_PROPERTY_FAILURE:
    case DELETE_PROPERTIES_FAILURE:
      return {
        isFetching: false,
        error: action.error
      }

    default:
      return state
  }
}

export default propertiesProgressReducer
