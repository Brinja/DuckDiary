import { ACT_FETCH_DUCK_LIST, } from '../constants';

import fetchDuckList from '../steps/fetchDuckList';

const apiMiddleWare = store => next => action =>{
  switch (action.type) {
    case ACT_FETCH_DUCK_LIST:
      return fetchDuckList(next, action);
    default:
      break;
  }

  next(action);
}


export default apiMiddleWare;
