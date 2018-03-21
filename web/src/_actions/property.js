import { propertyService } from 'services'
import {
  GET_PROPERTIES_REQUEST,
  GET_PROPERTIES_SUCCESS,
  GET_PROPERTIES_FAILURE,

  GET_PROPERTY_SUMMARY_REQUEST,
  GET_PROPERTY_SUMMARY_SUCCESS,
  GET_PROPERTY_SUMMARY_FAILURE,

  DELETE_PROPERTIES_REQUEST,
  DELETE_PROPERTIES_SUCCESS,
  DELETE_PROPERTIES_FAILURE
} from 'constants/actionTypes'

const createActions = (actionCreators, serviceFunction, ...payloads) => {
  const {
    createRequestAction,
    createSuccessAction,
    createFailureAction
  } = actionCreators

  return (dispatch) => {
    dispatch(createRequestAction())

    serviceFunction(...payloads)
      .then((result) => {
        dispatch(createSuccessAction(result))
      })
      .catch((err) => {
        dispatch(createFailureAction(err))
      })
  }
}

export const loadProperties = () => {
  const createRequestAction = () => ({ type: GET_PROPERTIES_REQUEST })
  const createSuccessAction = (properties) => ({ type: GET_PROPERTIES_SUCCESS, properties })
  const createFailureAction = (err) => ({ type: GET_PROPERTIES_FAILURE, error })

  return createActions({ createRequestAction, createSuccessAction, createFailureAction }, propertyService.getProperties)
}

export const loadPropertySummary = () => {
  const createRequestAction = () => ({ type: GET_PROPERTY_SUMMARY_REQUEST })
  const createSuccessAction = (propertySummary) => ({ type: GET_PROPERTY_SUMMARY_SUCCESS, propertySummary })
  const createFailureAction = (err) => ({ type: GET_PROPERTY_SUMMARY_FAILURE, error })

  return createActions({ createRequestAction, createSuccessAction, createFailureAction }, propertyService.getPropertySummary)
}

export const deleteProperties = (ids) => {
  const createRequestAction = (ids) => ({ type: DELETE_PROPERTIES_REQUEST, ids })
  const createSuccessAction = (deletedProperties) => ({ type: DELETE_PROPERTIES_SUCCESS, deletedProperties })
  const createFailureAction = (err) => ({ type: DELETE_PROPERTIES_FAILURE, error })

  return createActions({ createRequestAction, createSuccessAction, createFailureAction }, propertyService.deleteProperties, ids)
}
