import React, { Component } from 'react';
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
import HeaderComponent from './HeaderComponent';
import DuckComponent from './DuckComponent';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class HomePage extends Component<Props> {
  render() {
    const { navigation } = this.props;
    const info = {
      name : 'AAAA',
    };

    const duck1 = {
      id : '1111',
      name: '1111',
      uri: '11111',
      url: 'https://raw.githubusercontent.com/zenika-open-source/the-duck-gallery/master/ducks/Amagash.png',
    }

    const duck2 = {
      id : '2222',
      name: '2222',
      uri: '2222',
      url: 'https://raw.githubusercontent.com/zenika-open-source/the-duck-gallery/master/ducks/Cajs.png',
    }
    // https://reactnative.dev/img/tiny_logo.png
    // https://raw.githubusercontent.com/zenika-open-source/the-duck-gallery/master/ducks/Cajs.png
    const duck3 = {
      id : '33333',
      name: '2222',
      uri: '2222',
      url: 'https://raw.githubusercontent.com/zenika-open-source/the-duck-gallery/master/ducks/David-Thapa.png',
    }

    const duck4 = {
      id : '2222',
      name: '2222',
      uri: '2222',
      url: 'https://raw.githubusercontent.com/zenika-open-source/the-duck-gallery/master/ducks/bgauduch.png',
    }

    const content1 = [duck1, duck2, duck3, duck4];
    const content2 = [duck1, duck2, duck3, duck4];
    const content3 = [duck1, duck2, duck3, duck4];
    const content4 = [duck1, duck2, duck3, duck4];

    const info1 = {
      contents : content1,
    };

    const info2 = {
      contents : content2,
    };

    const info3 = {
      contents : content3,
    };

    const info4 = {
      contents : content4,
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
        <HeaderComponent navigation={navigation} info={info} />
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
    return (<DuckComponent navigation={item.navigation} info={item.info} />);
  }

  return (<View style={{flex: 1, alignItems:'center'}}>
          <Text> </Text>
          </View>);
};

export default HomePage;
