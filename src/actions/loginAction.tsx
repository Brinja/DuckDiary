import { ACT_API_LOGIN } from '../constants';

function startLogIn(username, password)
{
  return {
    type: ACT_API_LOGIN,
    payload:{
      username: username,
      password: password,
    }
  }
}


const loginAction = {
  startLogIn,
};

export { loginAction };
