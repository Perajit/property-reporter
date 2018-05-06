import {
  GET_PROPERTY_SUMMARY_REQUEST,
  GET_PROPERTY_SUMMARY_SUCCESS,
  GET_PROPERTY_SUMMARY_FAILURE,
} from 'constants/actionTypes'

const initialState = {
  isFetching: false,
  error: null
}

const propertySummaryProgressReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROPERTY_SUMMARY_REQUEST:
      return {
        isFetching: true,
        error: null
      }

    case GET_PROPERTY_SUMMARY_SUCCESS:
      return {
        isFetching: false,
        error: null
      }

    case GET_PROPERTY_SUMMARY_FAILURE:
      return {
        isFetching: false,
        error: action.error
      }

    default:
      return state
  }
}

export default propertySummaryProgressReducer
