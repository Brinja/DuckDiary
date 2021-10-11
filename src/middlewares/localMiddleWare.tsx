import { ACT_LOAD_PROFILE, ACT_LOAD_LOCAL_DIARY, ACT_ADD_DUCK_TO_WISHLIST,
          ACT_LOAD_WISHLIST, ACT_REMOVE_WISHLIST,
          ACT_ADD_DUCK, ACT_LOAD_DIARY, ACT_LOAD_DUCK_DIARY, ACT_ADD_DIARY } from '../constants'

import loadProfile from '../steps/loadProfile'
import loadLocalDiary from '../steps/loadLocalDiary'
import addDuckToWishlist from '../steps/addDuckToWishlist';
import loadLocalWishlist from '../steps/loadLocalWishlist';
import removeLocalWishlist from '../steps/removeLocalWishlist';
import addNewDuck from '../steps/addNewDuck';
import loadMyLocalDiary from '../steps/loadMyLocalDiary';
import loadMyDuckDiary from '../steps/loadMyDuckDiary';
import addNewDiaryNote from '../steps/addNewDiaryNote';

const localMiddleWare = store => next => action =>{
  //console.log('customMiddleWare : ' + action.type);
  switch (action.type) {
    case ACT_LOAD_PROFILE:
      return loadProfile(next, action);
    case ACT_LOAD_LOCAL_DIARY:
      return loadLocalDiary(next, action);
    case ACT_ADD_DUCK_TO_WISHLIST:
      return addDuckToWishlist(next, action);
    case ACT_LOAD_WISHLIST:
      return loadLocalWishlist(next, action);
    case ACT_REMOVE_WISHLIST:
      return removeLocalWishlist(next, action);
    case ACT_ADD_DUCK:
      return addNewDuck(next, action);
    case ACT_LOAD_DIARY:
      return loadMyLocalDiary(next, action);
    case ACT_LOAD_DUCK_DIARY:
      return loadMyDuckDiary(next, action);
    case ACT_ADD_DIARY:
      return addNewDiaryNote(next, action);
    default:
      break;
  }

  next(action);
}


export default localMiddleWare;
