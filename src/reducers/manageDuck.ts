//#Store
import {IDuckStore, initDuckState } from '../types/IStore';


// Action
import { ACT_ADD_DUCK, } from '../constants';




// function onAddDuck(state: IDuckStore, action: any)
// {
//   return{
//     ...state,
//     status: 'OK',
//   }
// }


export const manageDuck = (
  state: IDuckStore = initDuckState,
  action: any,
):IDuckStore => {
  switch (action.type) {
    case ACT_ADD_DUCK:
      //return onAddDuck(state, action);
    default:
      return state;
  }
};
