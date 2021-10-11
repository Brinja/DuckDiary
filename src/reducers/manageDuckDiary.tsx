import { ACT_LOAD_DUCK_DIARY, ACT_ADD_DIARY } from '../constants';

const initialState = {
  duck_diary: {},
  duck_profile: {},
};


function onLoadDuckDiary(state, action)
{
  return{
    ...state,
    duck_diary: action.payload.duck_diary === undefined ? {} : action.payload.duck_diary,
    duck_profile: action.payload.duck_profile === undefined ? {} : action.payload.duck_profile,
  }
}

function onAddDiary(state, action)
{
  return{
    ...state,
    duck_diary: action.payload.duck_diary === undefined ? {} : action.payload.duck_diary,
  }
}

function manageDuckDiary(state = initialState, action) {
  switch (action.type) {
    case ACT_LOAD_DUCK_DIARY:
      return onLoadDuckDiary(state, action);
    case ACT_ADD_DIARY:
      return onAddDiary(state, action);
    default:
      return state;
  }
}

export default manageDuckDiary;
