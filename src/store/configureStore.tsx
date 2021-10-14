import { createStore, combineReducers, applyMiddleware  } from 'redux'

import apiMiddleWare from '../middlewares/apiMiddleWare'
import localMiddleWare from '../middlewares/localMiddleWare'

import * as reducers from '../reducers';

const rootReducer = combineReducers(reducers);


const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(apiMiddleWare, localMiddleWare));
}

export default configureStore;
