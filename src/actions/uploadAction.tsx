import { ACT_SHARE_DUCK, ACT_API_SHARE_DUCK_CLEAR_MSG } from '../constants';


export const shareADuck = (uri: string, notes: string) =>{
  return {
    type: ACT_SHARE_DUCK,
    payload:{
      uri: uri,
      notes: notes,
    }
  }
};

export const clearShareDuckMsg = () =>{
  return {
    type: ACT_API_SHARE_DUCK_CLEAR_MSG,
  }
};
