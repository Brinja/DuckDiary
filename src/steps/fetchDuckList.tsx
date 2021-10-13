import React from 'react';
import { ACT_API_FETCH_DUCK_LIST } from '../constants';
import randomDuck from '../api/RandomDuck';
import { IModelExplorePet } from '../types/IModel';

function fetchDuckList(next, action)
{
  const info = {
    user_name: 'hi_there',
    txnType: 'GET_LIST',
  };

  randomDuck.onSubmitAPI(info).then((response) => analyzeAcqMsg(next, action, response)
  ).catch( (e) =>{
      console.log("fetchDuckList: " + e.message);
      next(action);
      return;
    }
  );

  next(action);
  return;
}

function analyzeAcqMsg(next, action, msg){
  //console.log('fetchDuckList : analyzeAcqMsg');
  //console.log(JSON.stringify(msg));

  const { images, http } = msg;
  const imageURL: IModelExplorePet[] = [];
  let baseURL = 'https://random-d.uk/api/v2/';

  if(!images?.length){
    // nothing
    console.log('fetchDuckList !!!!');
  }
  else {
    //console.log('fetchDuckList ????');
    for(let i = 0; i < images.length; i++){
      let url = baseURL + images[i];
      const duck: IModelExplorePet = {
        url : url,
        name : 'Jessy',
        date_time: '01 Nov 2021',
      };
      imageURL.push(duck);
    }
  }

  if(!http?.length){
    // nothing
  }
  else {
    for(let i = 0; i < http.length; i++){
      let url = baseURL + http[i];
      const duck: IModelExplorePet = {
        url : url,
        name : 'Jessy',
        date_time: '01 Nov 2021',
      };
      imageURL.push(duck);
    }
  }

  next({
    type: ACT_API_FETCH_DUCK_LIST,
    payload:
    {
      images: imageURL,
    }
  });
  return;
}

export default fetchDuckList;
