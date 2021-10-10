import React from 'react';
import { View, Text,
        SafeAreaView, FlatList, Dimensions } from 'react-native';

import DuckElement from './DuckElement';

const DuckComponent = ({navigation, info}) => {
  const { contents } = info === undefined ? {} : info;

  const DATA = [];
  for(let i = 1; i <= contents.length; i++)
  {
    const dataElement = {
      id: '0' + i,
      content: contents[i - 1 ],
      navigation: navigation,
    };

    //console.log('Duck ' + i + ' = ' + JSON.stringify(contents[i - 1 ]));

    DATA.push(dataElement);
  }

  return (
    <SafeAreaView style={{ flex: 1, marginRight: 20, marginLeft: 20,}}>
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
