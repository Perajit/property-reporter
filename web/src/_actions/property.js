import { propertyService } from '../_services'
import {
  GET_PROPERTIES_REQUEST,
  GET_PROPERTIES_SUCCESS,
  GET_PROPERTIES_FAILURE
} from '../_constants/actionTypes'

export const loadProperties = () => {
  const createRequestAction = () => ({ type: GET_PROPERTIES_REQUEST })
  const createSuccessAction = (properties) => ({ type: GET_PROPERTIES_SUCCESS, properties })
  const createFailureAction = (err) => ({ type: GET_PROPERTIES_FAILURE, error })

  return (dispatch) => {
    dispatch(createRequestAction())

    propertyService.getProperties()
      .then((properties) => {
        dispatch(createSuccessAction(properties))
      })
      .catch((err) => {
        dispatch(createFailureAction(err))
      })
  }
}
