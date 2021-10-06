import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../../screens/homeScreen";
import ProductDetail from "../../screens/productDetail";
import AllProducts from "../../screens/AllProducts";

const stack = createStackNavigator();

const HomeStacks = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <stack.Screen name="home" component={HomeScreen} />
    </stack.Navigator>
  );
};

export default HomeStacks;
