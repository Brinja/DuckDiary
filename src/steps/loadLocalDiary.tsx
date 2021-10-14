import AsyncStorage from '@react-native-async-storage/async-storage';
import * as DI from '../constants/diaryInfo';

const loadLocalDiary = async() => {
  try {
    const retrievedItem = await AsyncStorage.getItem(DI.MY_DIARY);
    const item = JSON.parse(retrievedItem);
    //console.log("loadProfile :" + JSON.stringify(item));
    return item;
  } catch (e) {
    //console.log('e: ' + e.message);
  }
};

export default loadLocalDiary;
