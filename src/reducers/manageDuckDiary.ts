//# Store
import { IPetDiary, initPetState } from '../types/IStore';

// Action
import { ACT_LOAD_DUCK_DIARY, ACT_ADD_DIARY, ACT_API_SHARE_DUCK_RES,
        ACT_API_SHARE_DUCK_CLEAR_MSG } from '../constants';


function onLoadDuckDiary(state, action)
{
  return{
    ...state,
    duck_diary: action.payload.duck_diary === undefined ? {} : action.payload.duck_diary,
    duck_profile: action.payload.duck_profile === undefined ? {} : action.payload.duck_profile,
    msg:'',
  }
}

function onAddDiary(state, action)
{
  return{
    ...state,
    duck_diary: action.payload.duck_diary === undefined ? {} : action.payload.duck_diary,
  }
}

function onShareDuckMessage(state, action)
{
  return{
    ...state,
    msg: action.payload.msg === undefined ? '' : action.payload.msg,
  }
}

function onClearShareDuckMsg(state, action)
{
  return{
    ...state,
    msg: '',
  }
}

export const manageDuckDiary = (
  state: IPetDiary = initPetState,
  action
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
