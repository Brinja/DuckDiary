import {  ACT_LOAD_DIARY } from '../constants';

import React from 'react';
import addDuck from './addDuck';
import addLocalDiary from './addLocalDiary';
import loadLocalDiary from './loadLocalDiary';

function addNewDuck(next, action)
{
  const { name, uri, notes } = action.payload;
  if(name === undefined || name == ''){
    action.payload = {
      status: 'NOT_OK',
      msg: 'Something went wrong !',
    }
    next(action);
    return;
  }

  const duck_id = '' + Date.now();

  const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
  const dateObj = new Date();
  const month = monthNames[dateObj.getMonth()];
  const day = String(dateObj.getDate()).padStart(2, '0');
  const year = dateObj.getFullYear();
  const date_birth = day + ' ' + month  + ',' + year;
  //console.log('date_birth = ' + date_birth);

  const duck = {
    id: duck_id,
    breed: '0001',
    name: name,
    date_birth: date_birth,
    about: notes,
    owner_id: '0001',
    star: '1',
    profile_uri: uri,
    profile_url: '',
    social: [
      {
        name: 'Jay',
        message: 'Nice!',
      },
      {
        name: 'Joe',
        message: 'WOW WOW!',
      },
    ],
  };

  addDuck(duck).then(data => {
    console.log('??? DUCK ADDED');

    // add diary too
    const diary = {
      duck_id: duck_id,
      notes: [
        {
          date_time: date_birth,
          text: notes,
          uri: uri,
          url: '',
        },
      ],
    };
    addLocalDiary(diary).then(res => {
      // load diary and move to Home Page
      //
      console.log('??? DIARY ADDED');
      loadLocalDiary().then(my_diary => {
        //console.log('my_diary = ' + JSON.stringify(my_diary));
        next({
          type: ACT_LOAD_DIARY,
          payload: {
            status: 'OK',
            diary: my_diary,
          }
        });
        return;
      }).catch(e => {
        console.log('my_diary e = ' + e.message);
        action.payload = {
          status: 'NOT_OK',
          msg: 'Something went wrong !',
        }
        next(action);
        return;
      });

    } ).catch(e => {
      action.payload = {
        status: 'NOT_OK',
        msg: 'Something went wrong !',
      }
      next(action);
      return;
    });

  }).catch(e => {
    action.payload = {
      status: 'NOT_OK',
      msg: 'Something went wrong !',
    }
    next(action);
    return;
  });

  next(action);
  return;
}

export default addNewDuck;
