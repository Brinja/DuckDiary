import { ACT_LOAD_DIARY, ACT_LOAD_DUCK_DIARY, ACT_ADD_DIARY,
          ACT_CLEAR_LOGIN } from '../constants';

function loadDiary()
{
  return {
    type: ACT_LOAD_DIARY,
    payload:{
      name: '',
    }
  }
}

function loadDuckDiary(id)
{
  return {
    type: ACT_LOAD_DUCK_DIARY,
    payload:{
      duck_id: id,
    }
  }
}

function clearLogIn()
{
  return {
    type: ACT_CLEAR_LOGIN,
    payload:{
      name: '',
    }
  }
}

function addDiary(id, uri, note)
{
  return {
    type: ACT_ADD_DIARY,
    payload:{
      duck_id: id,
      uri: uri,
      note: note,
    }
  }
}

const manageDiaryAction = {
  loadDiary,
  loadDuckDiary,
  addDiary,
  clearLogIn,
};

export  { manageDiaryAction };
