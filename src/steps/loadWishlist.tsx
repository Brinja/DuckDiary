import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WI from '../constants/wishlistInfo';

const loadWishlist = async() => {
  try {
    const retrievedItem = await AsyncStorage.getItem(WI.BREED);
    const item = JSON.parse(retrievedItem);
    //console.log("loadProfile :" + JSON.stringify(item));
    return item;
  } catch (e) {
    //console.log('e: ' + e.message);
  }
};

export default loadWishlist
