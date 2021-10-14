import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
} from 'react-native';

import { THEMACOLOR } from '../constants';

import { TranslatableText } from '../components/LanguageProvider';

class ProfilePage extends Component {
  render() {
    const { navigation } = this.props;
    return(
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: THEMACOLOR }}>
        <Text onPress={() => {navigation.goBack()}}>
        <TranslatableText dictionary={{
          swedish: 'På profilsidan',
          english: 'On Profile Page',
          malay: 'Di Halaman Profil'
        }}/>
        </Text>
      </SafeAreaView>
    );
  }
}


export default ProfilePage;
