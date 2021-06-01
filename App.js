import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Screen from './app/components/Screen';
import RootStack from './app/rootStacks/index';

const Main = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="tomato"
      />
        <Main />
    </>
  );
};

export default App;
