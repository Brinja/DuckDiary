import AsyncStorage from '@react-native-async-storage/async-storage';
import * as DI from '../constants/diaryInfo';

import loadLocalDiary from './loadLocalDiary';

const addLocalDiary = async(info) => {
  try {
    const data = await loadLocalDiary();

    let newData = [];
    if(data == undefined || !Array.isArray(data)){
      newData.push(info);
    }
    else {
      newData = [...data, info];
    }

    await AsyncStorage.setItem(DI.MY_DIARY, JSON.stringify(newData));
    return true;
  }
  catch(e) {
    console.log('AAAAa' + e.message);
  }

  return false;
};

export default addLocalDiary;
