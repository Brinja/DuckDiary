import { createStore, combineReducers, applyMiddleware  } from 'redux'

import apiMiddleWare from '../middlewares/apiMiddleWare'
import localMiddleWare from '../middlewares/localMiddleWare'

import exploreDuck from '../reducers/exploreDuck';
import localWishlist from '../reducers/localWishlist';

const rootReducer = combineReducers(
  {
    exploreDuck,
    localWishlist,
  }
);

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(apiMiddleWare, localMiddleWare));
}

export default configureStore;
