import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  FlatList,
} from 'react-native';


import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

import { THEMACOLOR } from '../constants';
import HeaderComponent from '../components/HeaderComponent';
import DuckComponent from '../components/DuckComponent';

import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { loadDiary } from '../actions/manageDiaryAction';
import { IStoreState, IDiary } from '../types/IStore';

export const HomePage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const homeStore: IDiary = useSelector((state: IStoreState) => state.manageDiary);

  useEffect(() => {
    dispatch(loadDiary());

    return () => {
      // anything to clean ?
    };
  }, []);

  let DATA = [];
  if( !Array.isArray(homeStore.diary) || homeStore.diary == [] ) {
    //console.log('DIARY !!!!!!!');
  }
  else {
    for(let i = 0 ; i < homeStore.diary.length; i++)
    {
      const { notes, duck_id } = homeStore.diary[i];
      //console.log('!!!!! = ' + JSON.stringify(diary[i]));
      //console.log('!!!!! ??? = ' + duck_id);

      let contents = [];
      for(let j = 0; j < notes.length; j++){
          // add duck id into content
          const newContent = {
            ...notes[j],
            id: duck_id,
          };

          contents.push(newContent);
      }

      const data_info = {
        id: '00' + i,
        info: contents,
        navigation: navigation,
      };

      DATA.push(data_info);
    }
  }

  const info = {
    name : 'My name',
  };

  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: THEMACOLOR }}>
        <HeaderComponent navigation={navigation} info={info} />
        <FlatList
          keyboardShouldPersistTaps='always'
          data={DATA}
          renderItem={(item) => renderItems(item)}
        />
      </SafeAreaView>
  );

};

const renderItems = ({item}) =>
{
  if(item.id != 'FFFFF999FFF'){
    return (<DuckComponent navigation={item.navigation} info={item.info} />);
  }

  return (<View style={{flex: 1, alignItems:'center'}}>
          <Text> </Text>
          </View>);
};
