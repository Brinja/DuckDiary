import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
} from 'react-native';

import { THEMACOLOR } from '../constants';

class ProfilePage extends Component {
  render() {
    const { navigation } = this.props;
    return(
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: THEMACOLOR }}>
        <Text onPress={() => {navigation.goBack()}}> On Profile Page </Text>
      </SafeAreaView>
    );
  }
}

export default ProfilePage;
