import { ACT_LOAD_DIARY, ACT_LOAD_DUCK_DIARY, ACT_ADD_DIARY,
          ACT_CLEAR_LOGIN } from '../constants';

export const loadDiary = () => {
  return {
    type: ACT_LOAD_DIARY,
    payload:{
      name: '',
    }
  }
};

export const loadDuckDiary = (id: string) =>{
  return {
    type: ACT_LOAD_DUCK_DIARY,
    payload:{
      duck_id: id,
    }
  }
};

export const clearLogIn = () =>{
  return {
    type: ACT_CLEAR_LOGIN,
    payload:{
      name: '',
    }
  }
};

export const addDiary = (id: string, uri: string, note: string) => {
  return {
    type: ACT_ADD_DIARY,
    payload:{
      duck_id: id,
      uri: uri,
      note: note,
    }
  }
};
