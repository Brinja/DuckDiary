import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomePage } from './Home';
import { HomeRight } from './HomeRight';
import { HomeLeft } from './HomeLeft';


const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}
        initialRouteName="Home"
        >
        <Tab.Screen name="Wishlist" component={HomeLeft}
        />
        <Tab.Screen name="Home" component={HomePage}
        />
        <Tab.Screen name="Explore" component={HomeRight} />
      </Tab.Navigator>
    );
};
