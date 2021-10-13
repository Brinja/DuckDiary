import React, {useState, useEffect} from 'react';
import {
  StyleSheet, Platform, SafeAreaView, Text,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginContainer } from './src/containers/LogIn';
import { HomeTabs } from './src/containers/HomeTabs';
import { AddDuck } from './src/containers/AddDuck';
import { Diary } from './src/containers/Diary';
import { AddDiary } from './src/containers/AddDiary';
import { SharePet } from './src/containers/SharePet';

import ProfilePage from './src/components/ProfilePage';
import LocalStore from './src/components/LocalStore';

import { THEMACOLOR } from './src/constants';
import { navigationRef, } from './src/utils/RootNavigator';

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

function NotFoundScreen({ navigation, route }) {
  return(
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: THEMACOLOR }}>
        <Text> {'Oops!!!!'} </Text>
        <Text onPress={() => navigation.navigate('LogInPage')} > {'>> Click here to Login <<'} </Text>
    </SafeAreaView>
  );
}

export const AppNavigator = () => {

  return(
    <NavigationContainer ref={navigationRef} linking={linking} fallback={<Text>Loading...</Text>} >
      <Stack.Navigator screenOptions={{
          headerShown: false
        }}>

        <Stack.Screen
          options={{
            headerStyle: {
              height: 30,
            },
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerBackTitle: 'Back',
            headerBackTitleStyle: {
              color: '#002251',
            },
            headerTintColor: '#002251',
            headerTitle: 'Duck Duck',
          }}
          name={'LogInPage'}
          component={LoginContainer}
        />
        <Stack.Screen name="HomeTab" component={HomeTabs} />
        <Stack.Screen name="AddDuck" component={AddDuck} />
        <Stack.Screen name="Diary" component={Diary} />
        <Stack.Screen name="AddDiary" component={AddDiary} />
        <Stack.Screen name="SharePage" component={SharePet} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="LocalStore" component={LocalStore} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
