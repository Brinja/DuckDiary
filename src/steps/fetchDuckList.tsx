import React from 'react';
import { ACT_API_FETCH_DUCK_LIST } from '../constants';
import randomDuck from '../api/RandomDuck';
import { IRandomApi } from '../api/RandomDuck';

import { IModelExplorePet } from '../types/IModel';
import Ajv from "ajv";

function fetchDuckList(next, action)
{
  const info: IRandomApi = {
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

  const ajv = new Ajv();
  const schema = {
    type: 'object',
    properties: {
      images: {type: 'array'},
      http: {type: 'array'},
    },
    required: ["images"],
  };

  const validate = ajv.compile(schema)
  const valid = validate(msg)
  if (!valid) {
    console.log('Error ' + validate.errors);
    const duck: IModelExplorePet = {
      url : '',
      name : 'Error - ',
      date_time: 'No Data',
    };

    next({
      type: ACT_API_FETCH_DUCK_LIST,
      payload:
      {
        images: [duck,],
      }
    });
    return;
  }

  const { images, http } = msg;
  const imageURL: IModelExplorePet[] = [];
  let baseURL = 'https://random-d.uk/api/v2/';


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


  for(let i = 0; i < http.length; i++){
      let url = baseURL + http[i];
      const duck: IModelExplorePet = {
        url : url,
        name : 'Jessy',
        date_time: '01 Nov 2021',
      };
      imageURL.push(duck);
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
