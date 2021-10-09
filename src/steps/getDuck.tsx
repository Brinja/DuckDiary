import AsyncStorage from '@react-native-async-storage/async-storage';
import * as DP from '../constants/duckProfile';

const getDuck = async() => {
  try {
    const retrievedItem = await AsyncStorage.getItem(DP.DUCK_PROFILE);
    const item = JSON.parse(retrievedItem);
    //console.log("loadProfile :" + JSON.stringify(item));
    return item;
  } catch (e) {
    //console.log('e: ' + e.message);
  }
};

export default getDuck;
