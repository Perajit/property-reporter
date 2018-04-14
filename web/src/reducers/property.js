import {
  GET_PROPERTY_DETAIL
} from 'constants/actionTypes'

const initialState = {}

const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROPERTY_DETAIL:
      return action.property

    default:
      return state
  }
}

export default propertyReducer
