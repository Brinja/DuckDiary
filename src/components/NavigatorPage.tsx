import React, { Component } from 'react';
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

const Stack = createNativeStackNavigator();


export default class NavigatorPage extends Component {
  render() {
    return (
      <NavigationContainer >
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="HomeTab" component={HomeTabPage} />
          <Stack.Screen name="Diary" component={DiaryPage} />
          <Stack.Screen name="AddDuck" component={AddDuck} />
          <Stack.Screen name="Profile" component={ProfilePage} />
          <Stack.Screen name="LocalStore" component={LocalStore} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


// <Stack.Screen name="Home" component={HomePage} />
// <Stack.Screen name="HomeR" component={HomeRightPage} />
// <Stack.Screen name="HomeL" component={HomeLeftPage} />
