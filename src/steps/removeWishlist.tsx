import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WI from '../constants/wishlistInfo';
import loadWishlist from './loadWishlist';


const removeWishist = async(info) => {
  try {
    const data = await loadWishlist();
    if(data == undefined || !Array.isArray(data)){
      return null;
    }
    // todo later: verify info , maybe somewhere else
    const filterData = data.filter(item => item.id != info.id);

    await AsyncStorage.setItem(WI.BREED, JSON.stringify(filterData));

    return filterData;
  }
  catch(e){
    console.log('eeeee = ' + e.message);
  }

  return null;
};

export default removeWishist;
