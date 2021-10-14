import AsyncStorage from '@react-native-async-storage/async-storage';
import * as DP from '../constants/duckProfile';
import getDuck from './getDuck';

const addDuck = async(info) => {
  try {
    const data = await getDuck();
    let newData = [];
    if(data == undefined || !Array.isArray(data)){
      newData.push(info);
    }
    else {
      newData = [...data, info];
    }

    await AsyncStorage.setItem(DP.DUCK_PROFILE, JSON.stringify(newData));
    return true;
  } catch (e) {
      //console.log('eee = ' + e.message);
  }

  return false;
};

export default addDuck;
