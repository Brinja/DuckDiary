import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text, FlatList,
} from 'react-native';

import { THEMACOLOR } from '../constants';
import { WishlistDuck } from '../components/WishlistDuck';


import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { loadWishlist, removeWishist } from '../actions/localWishlistAction';
import { IStoreState, IWishlistState } from '../types/IStore';


export const HomeLeft = () =>  {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const homeLeftStore: IWishlistState = useSelector((state: IStoreState) => state.localWishlist);

  useEffect(() => {
    dispatch(loadWishlist());

    return () => {
      // clean ?
    };
  }, []);


  let DATA = [];

  for(let i = 0 ; i < homeLeftStore.images.length ; i++){
  const info = {
      id: homeLeftStore.images[i].id,
      name: homeLeftStore.images[i].name,
      url: homeLeftStore.images[i].url,
      info_url: homeLeftStore.images[i].info_url,
    };

    const data_info = {
      id: '0' + i,
      info: info,
    };

    DATA.push(data_info);
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: THEMACOLOR, }}>
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
    return (<WishlistDuck info={item.info} />);
  }

  return (<View style={{flex: 1, alignItems:'center'}}>
          <Text> </Text>
          </View>);
};
