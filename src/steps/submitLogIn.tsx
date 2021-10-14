import { ACT_LOGIN_RES } from '../constants';
import randomDuck from '../api/RandomDuck';

function submitLogIn(next, action)
{
  const {username, password} = action.payload;

  if(username == undefined){
    next({
      type: ACT_LOGIN_RES,
      payload:{
        url: '',
      }
    });
    return;
  }

  const info = {
    user_name: username,
    password: password,
    txnType: 'GET_RANDOM',
  };

  randomDuck.onSubmitAPI(info).then((response) => analyzeAcqMsg(next, action, response)
  ).catch( (e) =>{
      console.log("submitLogIn: " + e.message);

      next({
        type: ACT_LOGIN_RES,
        payload:{
          url: '',
        }
      });
      return;
    }
  );

  next(action);
  return;

}

function analyzeAcqMsg(next, action, msg){
  //console.log('LOGIN = ' + JSON.stringify(msg));
  //{"message":"Powered by random-d.uk","url":"https://random-d.uk/api/95.jpg"}
  const { url } = msg === undefined ? '' : msg;
  next({
    type: ACT_LOGIN_RES,
    payload:{
      url: url,
    }
  });
  return;
}

export default submitLogIn;
