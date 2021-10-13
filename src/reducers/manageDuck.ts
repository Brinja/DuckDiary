import { ACT_ADD_DUCK, } from '../constants';

interface IDuckStore {
  status: string,
}

const initialState:IDuckStore = {
  status: '',
};


function onAddDuck(state, action)
{
  return{
    ...state,
    status: 'OK',
  }
}


export const manageDuck = (
  state: IDuckStore = initialState,
  action
):IDuckStore => {
  switch (action.type) {
    case ACT_ADD_DUCK:
      //return onAddDuck(state, action);
    default:
      return state;
  }
};
