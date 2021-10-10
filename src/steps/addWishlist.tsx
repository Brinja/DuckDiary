import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WI from '../constants/wishlistInfo';

import loadWishlist from './loadWishlist';

const addWishlist = async(info) => {
  try {
    const data = await loadWishlist();

    let newData = [];
    if(data == undefined || !Array.isArray(data)){
      console.log('????');
      //return false;
      newData.push(info);
    }
    else {
      newData = [...data, info];
    }

    //const newData = [...data, info];

    await AsyncStorage.setItem(WI.BREED, JSON.stringify(newData));
    return true;
  }
  catch(e) {
    console.log('Store Error  ' + e.message);
  }

  return false;
};

export default addWishlist;
