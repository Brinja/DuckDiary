//# Store
import { IExploreState, initExploreState } from '../types/IStore';

// Action
import { ACT_API_FETCH_DUCK_LIST, ACT_CLEAR_WISHLISH_MSG, ACT_DISPLAY_WISHLISH_MSG } from '../constants';



function onExploreDuck(state:IExploreState, action: any){
  return{
    ...state,
    images: action.payload.images === undefined ? [] : action.payload.images,
    msg: '',
  }
}

function onClearMsg(state:IExploreState, action: any){
  return{
    ...state,
    msg: '',
  }
}

function onDisplayMsg(state: IExploreState, action: any){
  return{
    ...state,
    msg: ' Added ! ',
  }
}

export const exploreDuck = (
  state: IExploreState = initExploreState,
  action: any
):IExploreState => {
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
};
