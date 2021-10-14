//Store
import { IUploadStore, initUploadState } from '../types/IStore';


//Acion
import { ACT_SHARE_DUCK, } from '../constants';




// function onShareDuck(state, action)
// {
//   return{
//     ...state,
//     status: 'OK',
//   }
// }


export const shareDuck = (
  state: IUploadStore = initUploadState,
  action: any
):IUploadStore => {
  switch (action.type) {
    case ACT_SHARE_DUCK:
      //return onShareDuck(state, action);
    default:
      return state;
  }
};
