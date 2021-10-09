import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';

import { THEMACOLOR } from '../constants';

class DiaryPage extends Component {
  render() {
    const { navigation } = this.props;
    return(
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: THEMACOLOR }}>
        <Text onPress={() => {navigation.goBack()}}> On My Diary </Text>
      </SafeAreaView>
    );
  }
}

export default DiaryPage;
