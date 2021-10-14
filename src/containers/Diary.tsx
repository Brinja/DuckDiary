import React, { useEffect } from 'react';
import {
  SafeAreaView, StyleSheet,
  View,
  Text, FlatList,
} from 'react-native';


import { THEMACOLOR } from '../constants';
import DuckProfile from '../components/DuckProfile';
import DiaryComponent from '../components/DiaryComponent';

import { loadDuckDiary } from '../actions/manageDiaryAction';
import { clearShareDuckMsg } from '../actions/uploadAction';

import { useNavigation, useRoute } from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { IStoreState, IPetDiary } from '../types/IStore';


export const Diary = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const duckDiaryStore: IPetDiary = useSelector((state: IStoreState) => state.manageDuckDiary);

  useEffect(() => {
    if(route.params.duck_id != '')
    {
      dispatch(loadDuckDiary(route.params.duck_id));
    }
    console.log('DUCK ID = ' + route.params.duck_id);

    return () => {
      // clean?
    };
  }, []);


  let DATA = [];

  const { notes } = duckDiaryStore.duck_diary;
  if(notes == undefined)
  {

  }
  else {
    for(let i = 0; i < notes.length ; i++){
      const data_info = {
        id: '00' + i,
        info: notes[i],
        navigation: navigation,
      };

      DATA.push(data_info)
    }
  }



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: THEMACOLOR }}>
      <DuckProfile navigation={navigation} info={duckDiaryStore.duck_profile} />
      <FlatList
        keyboardShouldPersistTaps='always'
        data={DATA}
        renderItem={(item) => renderItems(item)}
      />
      { (duckDiaryStore.msg != '') &&
      <View style={{position: 'absolute', top: 230, left: 100, right: 0, bottom: 0, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
        <Text style={diaryStyle.text_bnt}
              onPress={() => {dispatch(clearShareDuckMsg())}}
          > {'>> '}{duckDiaryStore.msg}{' <<'} </Text>
      </View>
      }
    </SafeAreaView>
  );

};

const renderItems = ({item}) =>
{
  if(item.id != 'FFFFF999FFF'){
    return (<DiaryComponent navigation={item.navigation} info={item.info} />);
  }

  return (<View style={{flex: 1, alignItems:'center'}}>
          <Text> </Text>
          </View>);
};

const diaryStyle = StyleSheet.create(
  {
    text_bnt:{
      color: '#c29a44',
      fontSize: 28 ,
      fontWeight: '400',
      textDecorationLine: 'none',
      textAlign: 'left',
      alignSelf: 'flex-start',
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      backgroundColor: '#afb5a7',
      borderColor: 'transparent',
      borderWidth:  0,
      borderRadius: 10,
    },
  }
);
