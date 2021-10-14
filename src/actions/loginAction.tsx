import { ACT_API_LOGIN, ACT_CLEAR_LOGIN } from '../constants';

export const startLogIn = (username: string, password: string) =>{
  return {
    type: ACT_API_LOGIN,
    payload:{
      username: username,
      password: password,
    }
  }
};

export const  clearLogIn = () =>{
  return {
    type: ACT_CLEAR_LOGIN,
  }
};
