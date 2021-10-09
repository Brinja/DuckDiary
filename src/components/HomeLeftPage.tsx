import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class HomeLeftPage extends Component {
  render() {
    const { navigation } = this.props;
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={() => {navigation.goBack()}}> On The Left </Text>
      </View>
    );
  }
}

export default HomeLeftPage;
