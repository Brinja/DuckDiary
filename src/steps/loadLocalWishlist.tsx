import React from 'react';
import loadWishlist from './loadWishlist';
import { IModelBreed } from '../types/IModel';

function loadLocalWishlist(next, action)
{
  loadWishlist().then(data => {
    //console.log('????? ' + JSON.stringify(data));
    if(!data?.length){
      console.log('????? >>>');
      const info:IModelBreed = {
        id: 'NA',
        name: 'You have No Duck in Wishlist !',
        url: '',
      };

      action.payload = {
        images: [info,],
      };

      next(action);
      return;
    }

    action.payload = {
      images: data,
    };
    next(action);
    return;
  }
  ).catch(e => {
    console.log('loadLocalWishlist  ' + e.message);
    next(action);
    return;
  });

  return;
}

export default loadLocalWishlist;
