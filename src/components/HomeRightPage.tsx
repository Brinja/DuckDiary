import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';

import { THEMACOLOR } from '../constants';

class HomeRightPage extends Component {
  render() {
    const { navigation } = this.props;
    return(
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: THEMACOLOR }}>
        <Text onPress={() => {navigation.goBack()}}> On The Right </Text>
      </SafeAreaView>
    );
  }
}

export default HomeRightPage;
