import { ACT_LOAD_DIARY, ACT_LOAD_DUCK_DIARY } from '../constants';

const initialState = {
  diary: [],
  duck_diary: [],
  duck_proifle: {},
};

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

function manageDiary(state = initialState, action) {
  switch (action.type) {
    case ACT_LOAD_DIARY:
      return onLoadDiary(state, action);
    case ACT_LOAD_DUCK_DIARY:
      return onLoadDuckDiary(state, action);
    default:
      return state;
  }
}

export default manageDiary;
