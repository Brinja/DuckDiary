import { ACT_LOAD_WISHLIST, ACT_REMOVE_WISHLIST } from '../constants';


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


function localWishlist(state = initialState, action) {
  switch (action.type) {
    case ACT_LOAD_WISHLIST:
      return onGetWishlist(state, action);
    case ACT_REMOVE_WISHLIST:
      return onRemoveWishlist(state, action);
    default:
      return state;
  }
}

export default localWishlist;
