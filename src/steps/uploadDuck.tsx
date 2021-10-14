import React from 'react';
import { PermissionsAndroid, Platform } from 'react-native';

import { ACT_API_SHARE_DUCK_RES } from '../constants';

import randomDuck from '../api/RandomDuck';

function uploadDuck(next, action)
{
  if(Platform.OS === 'ios')
  {
    uploadDuckA(next, action);
  }
  else {
    requestFilesAcessPermission().then(()=>{
      uploadDuckA(next, action);
      }).catch(err => {
        next(action);
        return;
    });
  }
}

function uploadDuckA(next, action)
{
  const { uri, notes } = action.payload;
  if(uri == undefined){
    next(action);
    return;
  }

  const info = {
    user_name: 'hi_there',
    txnType: 'POST_UPLOAD_IMAGE',
    uri: uri,
    notes: notes,
    name: 'DUCK',
  };

  randomDuck.onUploadAPI(info).then((response) => analyzeAcqMsg(next, action, response)
  ).catch( (e) =>{
      console.log("onUploadAPI: " + e.message);
      next({
        type: ACT_API_SHARE_DUCK_RES,
        payload:
        {
          msg: 'Share Fail!',
        }
      });
    }
  );

  next(action);
  return;
}

function analyzeAcqMsg(next, action, msg){
  //console.log('uploadDuck : analyzeAcqMsg');
  //console.log(JSON.stringify(msg));
  // RandomDuck reply this format : {"message":"File uploaded succesfully","success":true}
  const { message } = msg == undefined ? {} : msg;

  // send message to Diary Page, to pop up something
  next({
    type: ACT_API_SHARE_DUCK_RES,
    payload:
    {
      msg: message,
    }
  });
  return;
}

const requestFilesAcessPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: "It does not show",
        message:
          "somthing wrong" +
          "with this message",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      //console.log("You can read files");
    } else {
      console.log("Read Filese permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};


export default uploadDuck;
