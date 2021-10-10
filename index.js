/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import NavigatorPage from './src/components/NavigatorPage';
import {name as appName} from './app.json';

import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();

const  main = () => (
  <Provider store= { store }>
    <NavigatorPage />
  </Provider>
)

AppRegistry.registerComponent(appName, () => main);
