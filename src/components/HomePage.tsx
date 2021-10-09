import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
} from 'react-native';


import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class HomePage extends Component<Props> {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Test Screen</Text>
        <Button
          title="Button"
          onPress={() => {
            navigation.navigate('HomeR');
          }}
        />
      </SafeAreaView>
    );
  }
}

export default HomePage;
