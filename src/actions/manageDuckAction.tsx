import { ACT_ADD_DUCK } from '../constants';


export const addDuck = (name: string, uri: string, notes: string) => {
  return {
    type: ACT_ADD_DUCK,
    payload:{
      name: name,
      uri: uri,
      notes: notes,
    }
  }
};
