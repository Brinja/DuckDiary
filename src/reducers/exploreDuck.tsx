import { ACT_API_FETCH_DUCK_LIST, ACT_ADD_DUCK_TO_WISHLIST } from '../constants';


const initialState = {
  images: [],
  status: '',
};

function onExploreDuck(state, action){
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
    ...action.payload,
  }
}

function exploreDuck(state = initialState, action) {
  switch (action.type) {
    case ACT_API_FETCH_DUCK_LIST:
      return onExploreDuck(state, action);
    case ACT_ADD_DUCK_TO_WISHLIST :
    // no return anything yet, it could refesh UI unexpected, handle later
      //return onAddDuckToWishList(state, action);
    default:
      return state;
  }
}

export default exploreDuck;
