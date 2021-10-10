import React from 'react';
import loadWishlist from './loadWishlist';

function loadLocalWishlist(next, action)
{
  loadWishlist().then(data => {
    //console.log('????? ' + JSON.stringify(data));
    if(data === undefined){
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
