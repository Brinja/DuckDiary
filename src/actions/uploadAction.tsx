import { ACT_SHARE_DUCK, ACT_API_SHARE_DUCK_CLEAR_MSG } from '../constants';


function shareADuck(uri, notes)
{
  return {
    type: ACT_SHARE_DUCK,
    payload:{
      uri: uri,
      notes: notes,
    }
  }
}

function clearShareDuckMsg(uri, notes)
{
  return {
    type: ACT_API_SHARE_DUCK_CLEAR_MSG,
    payload:{
      name: '',
    }
  }
}

const uploadAction = {
  shareADuck,
  clearShareDuckMsg,
};

export  { uploadAction };
