/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import NavigatorPage from './src/components/NavigatorPage';
import {name as appName} from './app.json';

const  main = () => (
    <NavigatorPage />
)

AppRegistry.registerComponent(appName, () => main);
