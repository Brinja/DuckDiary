import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class HomeRightPage extends Component {
  render() {
    const { navigation } = this.props;
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={() => {navigation.goBack()}}> On The Right </Text>
      </View>
    );
  }
}

export default HomeRightPage;
