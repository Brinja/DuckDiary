import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text, FlatList,
} from 'react-native';

import { THEMACOLOR } from '../constants';
import DuckStar from './DuckStar';

class HomeRightPage extends Component {
  render() {
    const { navigation } = this.props;

    const info1 = {
      id: '111',
      name: 'John',
      date_time: '10 Jan 2021',
      url: 'https://raw.githubusercontent.com/zenika-open-source/the-duck-gallery/master/ducks/zesterquinn.png',
    };

    const info2 = {
      id: '222',
      name: 'Alex',
      date_time: '07 Oct 2021',
      url: 'https://raw.githubusercontent.com/zenika-open-source/the-duck-gallery/master/ducks/yodur2potassium.png',
    };

    const info3 = {
      id: '333',
      name: 'Lyly',
      date_time: '11 Sep 2021',
      url: 'https://raw.githubusercontent.com/zenika-open-source/the-duck-gallery/master/ducks/yannbertrand.png',
    };

    const info4 = {
      id: '444',
      name: 'Jess',
      date_time: '28 Apr 2021',
      url: 'https://raw.githubusercontent.com/zenika-open-source/the-duck-gallery/master/ducks/werikgpaula.png',
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
      <SafeAreaView style={{ flex: 1, backgroundColor: THEMACOLOR, }}>
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
    return (<DuckStar navigation={item.navigation} info={item.info} />);
  }

  return (<View style={{flex: 1, alignItems:'center'}}>
          <Text> </Text>
          </View>);
};

export default HomeRightPage;
