import { ACT_FETCH_DUCK_LIST,  ACT_SHARE_DUCK, ACT_API_LOGIN } from '../constants';

import fetchDuckList from '../steps/fetchDuckList';
import uploadDuck from '../steps/uploadDuck';
import submitLogIn from '../steps/submitLogIn';

const apiMiddleWare = store => next => action =>{
  switch (action.type) {
    case ACT_FETCH_DUCK_LIST:
      return fetchDuckList(next, action);
    case ACT_SHARE_DUCK:
      return uploadDuck(next, action);
    case ACT_API_LOGIN:
      return submitLogIn(next, action);
    default:
      break;
  }

  next(action);
}


export default apiMiddleWare;
