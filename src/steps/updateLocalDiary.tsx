import AsyncStorage from '@react-native-async-storage/async-storage';
import * as DI from '../constants/diaryInfo';
import loadLocalDiary from './loadLocalDiary';

const updateLocalDiary = async(id, note) => {
  try {
    const data = await loadLocalDiary();
    if(data == undefined || !Array.isArray(data)){
      return false;
    }

    const tempDuck = data.filter(item => item.duck_id == id);
    if(tempDuck == undefined || tempDuck.length == 0){
      return false;
    }
    const myDuck = tempDuck[0];

    const tempData = data.filter(item => item.duck_id != id);

    const { notes } = myDuck;
    const newNotes = [...notes, note];

    const newDuck = {
      ...myDuck,
      notes : newNotes,
    }

    const newDiary = [...tempData, newDuck];
    await AsyncStorage.setItem(DI.MY_DIARY, JSON.stringify(newDiary));

    return true;
  }
  catch(e) {
    console.log('eeee= ' + e.message);
    return false;
  }

  return true;
};

export default updateLocalDiary;
