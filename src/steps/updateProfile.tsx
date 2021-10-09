import AsyncStorage from '@react-native-async-storage/async-storage';
import * as UP from '../constants/userProfile'

const updateProfile = async(info) => {
  try {
    await AsyncStorage.setItem(UP.USER_PROFILE, JSON.stringify(info));
    return true;
  } catch (e) {
      //console.log(e);
  }

  return false;
};

export default updateProfile;
