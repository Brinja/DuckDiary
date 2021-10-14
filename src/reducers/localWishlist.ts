//# State
import { IWishlistState, initWishlistState } from '../types/IStore';

//# Action
import { ACT_LOAD_WISHLIST, ACT_REMOVE_WISHLIST, ACT_ADD_DUCK_TO_WISHLIST } from '../constants';




function onGetWishlist(state: IWishlistState, action: any)
{
  return{
    ...state,
    images: action.payload.images === undefined ? [] : action.payload.images,
    status: 'OK',
  }
}

function onRemoveWishlist(state: IWishlistState, action: any)
{
  return{
    ...state,
    images: action.payload.images === undefined ? [] : action.payload.images,
    status: 'OK',
  }
}

function onAddDuckToWishList(state: IWishlistState, action: any)
{
  return{
    ...state,
    images: action.payload.images === undefined ? [] : action.payload.images,
    status: 'OK',
  }
}


export const localWishlist = (
  state:IWishlistState = initWishlistState,
   action: any
 ):IWishlistState => {
  switch (action.type) {
    case ACT_LOAD_WISHLIST:
      return onGetWishlist(state, action);
    case ACT_REMOVE_WISHLIST:
      return onRemoveWishlist(state, action);
    case ACT_ADD_DUCK_TO_WISHLIST :
      // no return anything yet, it could refesh UI unexpected, handle later
      return onAddDuckToWishList(state, action);
    default:
      return state;
  }
};
