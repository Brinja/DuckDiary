import { ACT_LOAD_DIARY } from '../constants';

const initialState = {
  diary: [],
  status: '',
};

function onLoadDiary(state, action)
{
  return{
    ...state,
    diary: action.payload.diary === undefined ? [] : action.payload.diary,
    status: 'OK',
  }
}

function manageDiary(state = initialState, action) {
  switch (action.type) {
    case ACT_LOAD_DIARY:
      return onLoadDiary(state, action);
    default:
      return state;
  }
}

export default manageDiary;
