import AsyncStorage from '@react-native-async-storage/async-storage';
import * as DP from '../constants/duckProfile';
import getDuck from './getDuck';


const updateDuck = async(info) => {
  try {
    const data = await getDuck();
    if(data == undefined || !Array.isArray(data)){
      return false;
    }
    // todo later: verify info , maybe somewhere else
    const tempData = data.filter(item => item.id != info.id);
    const newData = [...tempData, info];

    await AsyncStorage.setItem(DP.DUCK_PROFILE, JSON.stringify(newData));

    return true;
  }
  catch(e){
    console.log('eeeee = ' + e.message);
  }

  return false;
};

export default updateDuck;
