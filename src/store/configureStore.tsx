import { createStore, combineReducers, applyMiddleware  } from 'redux'

import apiMiddleWare from '../middlewares/apiMiddleWare'
import localMiddleWare from '../middlewares/localMiddleWare'

import exploreDuck from '../reducers/exploreDuck';


const rootReducer = combineReducers(
  {
    exploreDuck,
  }
);

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(apiMiddleWare, localMiddleWare));
}

export default configureStore;
