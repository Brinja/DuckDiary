//# Store
import { IPetDiary, initPetState } from '../types/IStore';

// Action
import { ACT_LOAD_DUCK_DIARY, ACT_ADD_DIARY, ACT_API_SHARE_DUCK_RES,
        ACT_API_SHARE_DUCK_CLEAR_MSG } from '../constants';


function onLoadDuckDiary(state: IPetDiary, action: any)
{
  return{
    ...state,
    duck_diary: action.payload.duck_diary === undefined ? {} : action.payload.duck_diary,
    duck_profile: action.payload.duck_profile === undefined ? {} : action.payload.duck_profile,
    msg:'',
  }
}

function onAddDiary(state: IPetDiary, action: any)
{
  const { payload } = action;
  return{
    ...state,
    duck_diary: payload.duck_diary === undefined ? {} : payload.duck_diary,
  }
}

function onShareDuckMessage(state: IPetDiary, action: any)
{
  return{
    ...state,
    msg: action.payload.msg === undefined ? '' : action.payload.msg,
  }
}

function onClearShareDuckMsg(state: IPetDiary, action: any)
{
  return{
    ...state,
    msg: '',
  }
}

export const manageDuckDiary = (
  state: IPetDiary = initPetState,
  action: any
): IPetDiary => {
  switch (action.type) {
    case ACT_LOAD_DUCK_DIARY:
      return onLoadDuckDiary(state, action);
    case ACT_ADD_DIARY:
      return onAddDiary(state, action);
    case ACT_API_SHARE_DUCK_RES:
      return onShareDuckMessage(state, action);
    case ACT_API_SHARE_DUCK_CLEAR_MSG:
      return onClearShareDuckMsg(state, action);
    default:
      return state;
  }
};
