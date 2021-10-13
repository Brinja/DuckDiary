// State
import { ILoginStore, initLogInStore } from '../types/IStore';

// Action
import { ACT_API_LOGIN, ACT_CLEAR_LOGIN, ACT_LOGIN_RES } from '../constants';

export const manageLogin = (
  state: ILoginStore = initLogInStore,
  action
): ILoginStore => {
  switch (action.type) {
    case ACT_API_LOGIN : {
      return onStartLogin(state, action);
    }
    case ACT_LOGIN_RES: {
      return onLoginResult(state, action);
    }
    case ACT_CLEAR_LOGIN: {
      return onCleanLogIn(state, action);
    }
  }
  return state;
};


function onStartLogin(state, action)
{
  return{
    ...state,
    url: '',
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
