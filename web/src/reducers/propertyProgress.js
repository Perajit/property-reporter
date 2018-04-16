import {
  SAVE_PROPERTY_REQUEST,
  SAVE_PROPERTY_SUCCESS,
  SAVE_PROPERTY_FAILURE
} from 'constants/actionTypes'

const initialState = {
  isSaving: false,
  error: null
}

const PropertyProgressReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PROPERTY_REQUEST:
      return {
        isSaving: true,
        error: null
      }

    case SAVE_PROPERTY_SUCCESS:
      return {
        isSaving: false,
        error: null
      }

    case SAVE_PROPERTY_FAILURE:
      return {
        isSaving: false,
        error: action.error
      }

    default:
      return state
  }
}

export default PropertyProgressReducer
