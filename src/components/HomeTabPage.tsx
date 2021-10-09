import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './HomePage';
import HomeRightPage from './HomeRightPage';
import HomeLeftPage from './HomeLeftPage';

const Tab = createBottomTabNavigator();

class HomeTabs extends Component {
  render(){
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}
        initialRouteName="Home"
        >
        <Tab.Screen name="Wishlist" component={HomeLeftPage}
        />
        <Tab.Screen name="Home" component={HomePage}
        />
        <Tab.Screen name="Explore" component={HomeRightPage} />
      </Tab.Navigator>
    );
  }
}

export default HomeTabs;
