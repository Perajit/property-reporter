import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './_reducers'

export function configureStore() {
  const middlewares = [thunk]

  return createStore(rootReducer, applyMiddleware(...middlewares))
}
