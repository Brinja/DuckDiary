import React, { Component } from 'react';
import { Text, SafeAreaView, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import HomePage from './HomePage';
// import HomeRightPage from './HomeRightPage';
// import HomeLeftPage from './HomeLeftPage';
import HomeTabPage from './HomeTabPage';
import DiaryPage from './DiaryPage';
import ProfilePage from './ProfilePage';
import AddDuck from './AddDuck';
import LocalStore from './LocalStore';
import AddDiary from './AddDiary';
import SharePage from './SharePage';
import LogInPage from './LogInPage';

import { THEMACOLOR } from '../constants';

const Stack = createNativeStackNavigator();

const config = {
  screens: {
    Diary: {
      path: 'myduck/:duck_id' ,
      parse: {
       duck_id: (duck_id: String) => `${duck_id}`,
     },
    },
    LogInPage: 'home',
    NotFound: '*',
  },
};

const linking = {
  prefixes: [ 'https://duckdiary.com', 'duckdiary://'],
  config,
};

export default class NavigatorPage extends Component {
  render() {
    return (
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>} >
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="LogInPage" component={LogInPage} />
          <Stack.Screen name="HomeTab" component={HomeTabPage} />
          <Stack.Screen name="Diary" component={DiaryPage} />
          <Stack.Screen name="AddDuck" component={AddDuck} />
          <Stack.Screen name="Profile" component={ProfilePage} />
          <Stack.Screen name="LocalStore" component={LocalStore} />
          <Stack.Screen name="AddDiary" component={AddDiary} />
          <Stack.Screen name="SharePage" component={SharePage} />
          <Stack.Screen name="NotFound" component={NotFoundScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

function NotFoundScreen({ navigation, route }) {
  return(
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: THEMACOLOR }}>
        <Text> {'Oops!!!!'} </Text>
        <Text onPress={() => navigation.navigate('LogInPage')} > {'>> Click here to Login <<'} </Text>
    </SafeAreaView>
  );
}
