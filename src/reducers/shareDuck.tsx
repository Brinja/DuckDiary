import { ACT_SHARE_DUCK, } from '../constants';


const initialState = {
  status: '',
};


function onShareDuck(state, action)
{
  return{
    ...state,
    status: 'OK',
  }
}


function shareDuck(state = initialState, action) {
  switch (action.type) {
    case ACT_SHARE_DUCK:
      //return onShareDuck(state, action);
    default:
      return state;
  }
}

export default shareDuck;
