import React from 'react';
import removeWishlist from './removeWishlist';

function removeLocalWishlist(next, action)
{
  const { id , name } = action.payload;
  if(id == undefined || id == ''){
    next(action);
    return;
  }

  removeWishlist({id: id, name: name}).then(data => {
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
    console.log('removeLocalWishlist  ' + e.message);
    next(action);
    return;
  });

  return;
}

export default removeLocalWishlist;
