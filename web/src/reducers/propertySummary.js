import {
  GET_PROPERTY_SUMMARY_SUCCESS
} from 'constants/actionTypes'

const initialState = {
  list: [],
  overall: {}
}

const propertySummaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROPERTY_SUMMARY_SUCCESS:
      return action.propertySummary

    default:
      return state
  }
}

export default propertySummaryReducer
