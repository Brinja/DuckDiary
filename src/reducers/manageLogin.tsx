import { ACT_API_LOGIN, ACT_LOGIN_RES, ACT_CLEAR_LOGIN } from '../constants';

const initialState = {
  start_login: '',
  url: '',
};


function onStartLogin(state, action)
{
  return{
    ...state,
    start_login: 'OK',
  }
}

function onLoginResult(state, action)
{
  return{
    ...state,
    start_login: '',
    url: action.payload.url === undefined ? '' : action.payload.url,
  }
}

function onCleanLogIn(state, action)
{
  return{
    ...state,
    start_login: '',
    url: '',
  }
}


function manageLogin(state = initialState, action) {
  switch (action.type) {
    case ACT_LOGIN_RES:
      return onLoginResult(state, action);
    case ACT_API_LOGIN:
      return onStartLogin(state, action);
    case ACT_CLEAR_LOGIN:
      return onCleanLogIn(state, action);
    default:
      return state;
  }
}

export default manageLogin;
