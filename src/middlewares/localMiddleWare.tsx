import { ACT_LOAD_PROFILE, ACT_LOAD_LOCAL_DIARY } from '../constants'

import loadProfile from '../steps/loadProfile'
import loadLocalDiary from '../steps/loadLocalDiary'

const localMiddleWare = store => next => action =>{
  console.log('customMiddleWare : ' + action.type);
  switch (action.type) {
    case ACT_LOAD_PROFILE:
      return loadProfile(next, action);
    case ACT_LOAD_LOCAL_DIARY:
      return loadLocalDiary(next, action);
    default:
      break;
  }

  next(action);
}


export default localMiddleWare;
