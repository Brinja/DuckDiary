import { ACT_FETCH_DUCK_LIST, ACT_CLEAR_DUCK_LIST,
        ACT_ADD_DUCK_TO_WISHLIST, ACT_CLEAR_WISHLISH_MSG } from '../constants';

export const fetchDuckList = () =>{
  return {
    type: ACT_FETCH_DUCK_LIST,
  }
};

export const clearDuckList = () =>{
  return {
    type: ACT_CLEAR_DUCK_LIST,
  }
};

export const  addToWishList = (name: string, url:string) =>{
  return {
    type: ACT_ADD_DUCK_TO_WISHLIST,
    payload:{
      name: name,
      url: url,
    }
  }
};

export const clearMsg = () => {
  return {
    type: ACT_CLEAR_WISHLISH_MSG,
  }
}
