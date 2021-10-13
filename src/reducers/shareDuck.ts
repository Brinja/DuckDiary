import { ACT_SHARE_DUCK, } from '../constants';

interface IUploadStore {
  status: string,
}

const initialState: IUploadStore = {
  status: '',
};


function onShareDuck(state, action)
{
  return{
    ...state,
    status: 'OK',
  }
}


export const shareDuck = (
  state: IUploadStore = initialState,
  action
):IUploadStore => {
  switch (action.type) {
    case ACT_SHARE_DUCK:
      //return onShareDuck(state, action);
    default:
      return state;
  }
};
