import { ACT_LOAD_WISHLIST, ACT_REMOVE_WISHLIST } from '../constants';

export const loadWishlist = () => {
  return {
    type: ACT_LOAD_WISHLIST,
  }
};

export const removeWishist = (id: string, name: string) => {
  return {
    type: ACT_REMOVE_WISHLIST,
    payload:{
      name: name,
      id: id,
    }
  }
};
