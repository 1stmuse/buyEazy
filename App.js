import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Screen from "./app/components/common/Screen";
import Colors from "./app/Colors";
// import Onboarding from "./app/onBoarding"
// import Auth from './app/Auth';
import RootStack from "./app/rootStacks";

const Main = () => {
  return (
    <Screen>
      <NavigationContainer>
        <RootStack />
        {/* <Auth/> */}
        {/* <Onboarding/> */}
      </NavigationContainer>
    </Screen>
  );
};

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={Colors.white}
      />
      <Main />
    </>
  );
};

export default App;
