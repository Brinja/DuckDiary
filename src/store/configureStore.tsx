import { createStore, combineReducers, applyMiddleware  } from 'redux'

import apiMiddleWare from '../middlewares/apiMiddleWare'
import localMiddleWare from '../middlewares/localMiddleWare'

import exploreDuck from '../reducers/exploreDuck';
import localWishlist from '../reducers/localWishlist';
import manageDuck from '../reducers/manageDuck';
import manageDiary from '../reducers/manageDiary';
import manageDuckDiary from '../reducers/manageDuckDiary';

const rootReducer = combineReducers(
  {
    exploreDuck,
    localWishlist,
    manageDuck,
    manageDiary,
    manageDuckDiary,
  }
);

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(apiMiddleWare, localMiddleWare));
}

export default configureStore;
