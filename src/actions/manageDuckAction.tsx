import { ACT_ADD_DUCK } from '../constants';


function addDuck(name, uri, notes)
{
  return {
    type: ACT_ADD_DUCK,
    payload:{
      name: name,
      uri: uri,
      notes: notes,
    }
  }
}

const manageDuckAction = {
  addDuck,
};

export  { manageDuckAction };
