import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
} from 'react-native';

import { THEMACOLOR } from '../constants';

class AddDuck extends Component {
  render() {
    const { navigation } = this.props;
    return(
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: THEMACOLOR }}>
        <Text onPress={() => {navigation.goBack()}}> On Add Duck </Text>
      </SafeAreaView>
    );
  }
}

export default AddDuck;
