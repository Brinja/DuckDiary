import React, { useState, useEffect } from 'react';
import {
  SafeAreaView, StyleSheet,
  View,
  Text, FlatList,
} from 'react-native';

import { THEMACOLOR } from '../constants';
import { DuckStar } from '../components/DuckStar';


import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { fetchDuckList, addToWishList, clearMsg } from '../actions/fetchDuckListAction';
import { IStoreState, IExploreState } from '../types/IStore';

export const HomeRight = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const homeRightStore: IExploreState = useSelector((state: IStoreState) => state.exploreDuck);

  useEffect(() => {
    dispatch(fetchDuckList());
    //console.log('Explore ==> fetch images');

    return () => {
      // clean?
    };
  },[]);

  const DATA = [];

  for(let i = 0; i < homeRightStore.images.length ; i++){
    const info = {
      id: '000' + i,
      name: homeRightStore.images[i].name,
      date_time: homeRightStore.images[i].date_time,
      url: homeRightStore.images[i].url,
    };

    const data_list = {
      id: '0' + i,
      info: info,
    };

    DATA.push(data_list);
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: THEMACOLOR, }}>
      <FlatList
        keyboardShouldPersistTaps='always'
        data={DATA}
        renderItem={(item) => renderItems(item)}
      />
      { (homeRightStore.msg != '') &&
      <View style={{position: 'absolute', top: 230, left: 100, right: 0, bottom: 0, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
        <Text style={wishlistStyle.text_bnt}
              onPress={() => dispatch(clearMsg())}
          > {'>> '}{homeRightStore.msg}{' <<'} </Text>
      </View>
      }
    </SafeAreaView>
  );

};

const renderItems = ({item}) =>
{
  if(item.id != 'FFFFF999FFF'){
    return (<DuckStar info={item.info} />);
  }

  return (<View style={{flex: 1, alignItems:'center'}}>
          <Text> </Text>
          </View>);
};


const wishlistStyle = StyleSheet.create(
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
      borderRadius: 0,
      backgroundColor: '#afb5a7',
      borderColor: 'transparent',
      borderWidth:  0,
      borderRadius: 10,
    },
  }
);
