import AsyncStorage from '@react-native-async-storage/async-storage';
import * as UP from '../constants/userProfile'

const loadProfile = async() => {
  try {
    const retrievedItem = await AsyncStorage.getItem(UP.USER_PROFILE);
    const item = JSON.parse(retrievedItem);
    //console.log("loadProfile :" + JSON.stringify(item));
    return item;
  } catch (e) {
    //console.log('e: ' + e.message);
  }
};

export default loadProfile;
