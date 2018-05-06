import { propertyService } from 'services'

import { store } from 'src/store'

import {
  GET_PROPERTIES_REQUEST,
  GET_PROPERTIES_SUCCESS,
  GET_PROPERTIES_FAILURE,

  DELETE_PROPERTIES_REQUEST,
  DELETE_PROPERTIES_SUCCESS,
  DELETE_PROPERTIES_FAILURE,

  GET_PROPERTY_DETAIL,

  SAVE_PROPERTY_REQUEST,
  SAVE_PROPERTY_SUCCESS,
  SAVE_PROPERTY_FAILURE,

  GET_PROPERTY_SUMMARY_REQUEST,
  GET_PROPERTY_SUMMARY_SUCCESS,
  GET_PROPERTY_SUMMARY_FAILURE
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
      .catch((error) => {
        dispatch(createFailureAction(error))
      })
  }
}

export const loadProperties = () => {
  const createRequestAction = () => ({ type: GET_PROPERTIES_REQUEST })
  const createSuccessAction = (properties) => ({ type: GET_PROPERTIES_SUCCESS, properties })
  const createFailureAction = (error) => ({ type: GET_PROPERTIES_FAILURE, error })

  return createActions({ createRequestAction, createSuccessAction, createFailureAction }, propertyService.getProperties)
}

export const deleteProperties = (ids) => {
  const createRequestAction = (ids) => ({ type: DELETE_PROPERTIES_REQUEST, ids })
  const createSuccessAction = () => ({ type: DELETE_PROPERTIES_SUCCESS, ids })
  const createFailureAction = (error) => ({ type: DELETE_PROPERTIES_FAILURE, error })

  return createActions({ createRequestAction, createSuccessAction, createFailureAction }, propertyService.deleteProperties, ids)
}

export const loadPropertyDetail = (id) => {
  let { properties } = store.getState()
  let property = properties.find((item) => item.id === id) || null

  return (dispatch) => {
    dispatch({ type: GET_PROPERTY_DETAIL, property })
  }
}

export const saveProperty = (data) => {
  const createRequestAction = (data) => ({ type: SAVE_PROPERTY_REQUEST, data })
  const createSuccessAction = (savedProperty) => ({ type: SAVE_PROPERTY_SUCCESS, savedProperty })
  const createFailureAction = (error) => ({ type: SAVE_PROPERTY_FAILURE, error })

  return createActions({ createRequestAction, createSuccessAction, createFailureAction }, propertyService.saveProperty, data)
}

export const loadPropertySummary = () => {
  const createRequestAction = () => ({ type: GET_PROPERTY_SUMMARY_REQUEST })
  const createSuccessAction = (propertySummary) => ({ type: GET_PROPERTY_SUMMARY_SUCCESS, propertySummary })
  const createFailureAction = (error) => ({ type: GET_PROPERTY_SUMMARY_FAILURE, error })

  return createActions({ createRequestAction, createSuccessAction, createFailureAction }, propertyService.getPropertySummary)
}
