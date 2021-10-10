import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text, FlatList, Dimensions,
} from 'react-native';


import { THEMACOLOR } from '../constants';
import DuckProfile from './DuckProfile';
import DiaryComponent from './DiaryComponent';

class DiaryPage extends Component {
  render() {
    const { navigation } = this.props;
    const info = {
      name : 'AAAA',
    };

    const info1 = {
      url: 'https://raw.githubusercontent.com/very-scary-scenario/duck/master/images/duck1-1.png',
      date_time: '11 Jan 2021',
      notes: 'wow ow ow wo wow',
    }

    const info2 = {
      url: 'https://raw.githubusercontent.com/very-scary-scenario/duck/master/images/duck15.png',
      date_time: '11 Feb 2021',
      notes: 'so \n lovely \n omg \n :) \n hihi',
    };

    const info3 = {
      url: 'https://raw.githubusercontent.com/very-scary-scenario/duck/master/images/duck6.png',
      date_time: '11 Mar 2021',
      notes: 'he first meet Lyly',
    };

    const info4 = {
      url: 'https://raw.githubusercontent.com/very-scary-scenario/duck/master/images/duck9.png',
      date_time: '11 Apr 2021',
      notes: 'he went to school he went to schoolhe went to schoolhe went to school he went to school he went to school',
    };

    const DATA = [
      { id: '01',
        info: info1,
        navigation: navigation,
      },
      { id: '02',
        info: info2,
        navigation: navigation,
      },
      { id: '03',
        info: info3,
        navigation: navigation,
      },
      { id: '04',
        info: info4,
        navigation: navigation,
      },
      {
        id: 'FFFFF999FFF',
      },
    ];

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: THEMACOLOR }}>
        <DuckProfile navigation={navigation} info={info} />
        <FlatList
          keyboardShouldPersistTaps='always'
          data={DATA}
          renderItem={(item) => renderItems(item)}
        />
      </SafeAreaView>
    );
  }
}

const renderItems = ({item}) =>
{
  if(item.id != 'FFFFF999FFF'){
    return (<DiaryComponent navigation={item.navigation} info={item.info} />);
  }

  return (<View style={{flex: 1, alignItems:'center'}}>
          <Text> </Text>
          </View>);
};


export default DiaryPage;
