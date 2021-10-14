import React from 'react';
import { ACT_DISPLAY_WISHLISH_MSG } from '../constants';
import addWishlist from './addWishlist';

function addDuckToWishlist(next, action)
{
  const { name, url } = action.payload;
  if(url === undefined || url == ''){
    action.payload = {
      status: 'NOT_OK',
      msg: 'Something went wrong !',
    }
    next(action);
    return;
  }

  const breed_id = '' + Date.now();

  const info = {
    id: breed_id,
    name: name,
    url: url,
    info_url: 'https://www.petassure.com/new-newsletters/keeping-and-caring-for-ducks-as-pets/',
  };

  addWishlist(info).then(data => {
    //console.log('??? DUCK ADDED = ' + data);
    if(data){
      action.payload = {
        images: data,
      };

      // send added message to user
      next({
        type: ACT_DISPLAY_WISHLISH_MSG,
        payload: {
          name: '',
        }
      });

      next(action);
      return;
    }
    else {
      action.payload = {
        status: 'NOT_OK',
        msg: 'Something went wrong !',
      }
      next(action);
      return;
    }

  }).catch(e => {
    action.payload = {
      status: 'NOT_OK',
      msg: 'Something went wrong !',
    }
    next(action);
    return;
  });

}

export default addDuckToWishlist;
