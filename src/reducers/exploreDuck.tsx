import { ACT_API_FETCH_DUCK_LIST } from '../constants';


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

function exploreDuck(state = initialState, action) {
  switch (action.type) {
    case ACT_API_FETCH_DUCK_LIST:
      return onExploreDuck(state, action);
    default:
      return state;
  }
}

export default exploreDuck;
