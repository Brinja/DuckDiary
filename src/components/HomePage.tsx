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
      name: 'AAA',
      uri: ' ',
      url: 'https://raw.githubusercontent.com/zenika-open-source/the-duck-gallery/master/ducks/Amagash.png',
    }

    const duck2 = {
      id : '2222',
      name: 'BBB',
      uri: ' ',
      url: 'https://raw.githubusercontent.com/zenika-open-source/the-duck-gallery/master/ducks/Cajs.png',
    }
    // https://reactnative.dev/img/tiny_logo.png
    // https://raw.githubusercontent.com/zenika-open-source/the-duck-gallery/master/ducks/Cajs.png
    const duck3 = {
      id : '3333',
      name: 'CCC',
      uri: ' ',
      url: 'https://raw.githubusercontent.com/zenika-open-source/the-duck-gallery/master/ducks/David-Thapa.png',
    }

    const duck4 = {
      id : '4444',
      name: 'DDDD',
      uri: ' ',
      url: 'https://raw.githubusercontent.com/zenika-open-source/the-duck-gallery/master/ducks/bgauduch.png',
    }

    const content1 = [{
      ...duck1,
      date_time: '20 Jan 2020',
    }, {
      ...duck1,
      date_time: '21 Jan 2020',
    }, {
      ...duck1,
      date_time: '22 Jan 2020',
    }, {
      ...duck1,
      date_time: '23 Jan 2020',
    }];
    const content2 = [{
      ...duck2,
      date_time: '10 Aug 2021',
    }, {
      ...duck2,
      date_time: '20 Aug 2021',
    }, {
      ...duck2,
      date_time: '10 Sep 2021',
    }, {
      ...duck2,
      date_time: '30 Aug 2021',
    }];
    const content3 = [{
      ...duck3,
      date_time: '10 Mar 2021',
    }, {
      ...duck3,
      date_time: '20 Mar 2021',
    }, {
      ...duck3,
      date_time: '10 Aug 2021',
    }, {
      ...duck3,
      date_time: '30 Aug 2021',
    }];
    const content4 = [{
      ...duck4,
      date_time: '10 Oct 2021',
    }, {
      ...duck4,
      date_time: '11 Oct 2021',
    }, {
      ...duck4,
      date_time: '12 Oct 2021',
    }, {
      ...duck4,
      date_time: '13 Oct 2021',
    }];

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
