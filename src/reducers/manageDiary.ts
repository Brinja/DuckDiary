//# Store
import { IDiary, initDiaryState } from '../types/IStore';

//# Action
import { ACT_LOAD_DIARY, ACT_LOAD_DUCK_DIARY } from '../constants';
import { IModelDiary, IModelDuckDiary, IModelDuckProfile } from '../types/IModel';


function onLoadDiary(state, action)
{
  return{
    ...state,
    diary: action.payload.diary === undefined ? [] : action.payload.diary,
  }
}

function onLoadDuckDiary(state, action)
{
  return{
    ...state,
    duck_diary: action.payload.duck_diary === undefined ? [] : action.payload.duck_diary,
    duck_proifle: action.payload.duck_proifle === undefined ? {} : action.payload.duck_proifle,
  }
}

export const manageDiary = (
  state: IDiary = initDiaryState,
  action
): IDiary => {
  switch (action.type) {
    case ACT_LOAD_DIARY:
      return onLoadDiary(state, action);
    case ACT_LOAD_DUCK_DIARY:
      return onLoadDuckDiary(state, action);
    default:
      return state;
  }
};
