import { ACT_LOAD_DIARY } from '../constants';

function loadDiary()
{
  return {
    type: ACT_LOAD_DIARY,
    payload:{
      name: '',
    }
  }
}

const manageDiaryAction = {
  loadDiary,
};

export  { manageDiaryAction };
