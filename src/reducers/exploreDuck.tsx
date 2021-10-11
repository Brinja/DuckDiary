import { ACT_API_FETCH_DUCK_LIST, ACT_CLEAR_WISHLISH_MSG, ACT_DISPLAY_WISHLISH_MSG } from '../constants';


const initialState = {
  images: [],
  msg: '',
};

function onExploreDuck(state, action){
  return{
    ...state,
    images: action.payload.images === undefined ? [] : action.payload.images,
    msg: '',
  }
}

function onClearMsg(state, action){
  return{
    ...state,
    msg: '',
  }
}

function onDisplayMsg(state, action){
  return{
    ...state,
    msg: ' Added ! ',
  }
}

function exploreDuck(state = initialState, action) {
  switch (action.type) {
    case ACT_API_FETCH_DUCK_LIST:
      return onExploreDuck(state, action);
    case ACT_CLEAR_WISHLISH_MSG :
      return onClearMsg(state, action);
    case ACT_DISPLAY_WISHLISH_MSG:
      return onDisplayMsg(state, action);
    default:
      return state;
  }
}

export default exploreDuck;
