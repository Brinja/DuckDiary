import React from 'react';
import { View, Text,
        SafeAreaView, FlatList, Dimensions } from 'react-native';

import DuckElement from './DuckElement';

const DuckComponent = ({navigation, info}) => {
  const { contents } = info === undefined ? {} : info;

  //console.log('AAAAaA = ' + JSON.stringify(info));

  const DATA = [];
  for(let i = 1; i <= contents.length; i++)
  {
    const dataElement = {
      id: '0' + i,
      content: contents[i - 1 ],
      navigation: navigation,
    };

    DATA.push(dataElement);
  }

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <FlatList
        horizontal={true}
        keyboardShouldPersistTaps='always'
        data={DATA}
        renderItem={(item) => renderItems(item)}
      />
    </SafeAreaView>
  );
};

const renderItems = ({item}) =>{
  return (<DuckElement navigation={item.navigation} duckInfo={item.content} />);
};


export default DuckComponent;
