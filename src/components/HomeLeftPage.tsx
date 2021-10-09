import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';

import { THEMACOLOR } from '../constants';

class HomeLeftPage extends Component {
  render() {
    const { navigation } = this.props;
    return(
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: THEMACOLOR }}>
        <Text onPress={() => {navigation.goBack()}}> On The Left </Text>
      </SafeAreaView>
    );
  }
}

export default HomeLeftPage;
