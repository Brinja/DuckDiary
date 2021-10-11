import { ACT_LOAD_WISHLIST, ACT_REMOVE_WISHLIST, ACT_ADD_DUCK_TO_WISHLIST } from '../constants';


const initialState = {
  images: [],
  status: '',
};

function onGetWishlist(state, action)
{
  return{
    ...state,
    images: action.payload.images === undefined ? [] : action.payload.images,
    status: 'OK',
  }
}

function onRemoveWishlist(state, action)
{
  return{
    ...state,
    images: action.payload.images === undefined ? [] : action.payload.images,
    status: 'OK',
  }
}

function onAddDuckToWishList(state, action)
{
  return{
    ...state,
    images: action.payload.images === undefined ? [] : action.payload.images,
    status: 'OK',
  }
}


function localWishlist(state = initialState, action) {
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
}

export default localWishlist;
