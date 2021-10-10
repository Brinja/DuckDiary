import { ACT_ADD_DUCK, } from '../constants';


const initialState = {
  status: '',
};


function onAddDuck(state, action)
{
  return{
    ...state,
    status: 'OK',
  }
}


function manageDuck(state = initialState, action) {
  switch (action.type) {
    case ACT_ADD_DUCK:
      //return onAddDuck(state, action);
    default:
      return state;
  }
}

export default manageDuck;
