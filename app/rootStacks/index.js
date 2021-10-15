import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { createDrawerNavigator } from '@react-navigation/drawer';

// import screens
import TabRoot from "./tabs/index";
import ProductDetails from "../screens/productDetail";
import AllProducts from "../screens/AllProducts";
import Cart from "../screens/Cart";
import Checkout from "../screens/Checkout";

const options = {
  headerShown: false,
};

// const tabs = createMaterialBottomTabNavigator()
const stack = createStackNavigator();
// const drawer = createDrawerNavigator()

// const Home = ({navigation}) => {
//   return <TabRoot />;
// };

const RootStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="home" children={TabRoot} options={{ ...options }} />
      <stack.Screen
        name="product_detail"
        component={ProductDetails}
        options={{ ...options }}
      />
      <stack.Screen
        name="all_products"
        component={AllProducts}
        options={{ ...options }}
      />
      <stack.Screen
        name="cart"
        component={Cart}
        options={{
          headerBackTitleVisible: false,
        }}
      />
      <stack.Screen
        name="checkout"
        component={Checkout}
        options={{
          headerBackTitleVisible: false,
          headerShown: false,
        }}
      />
    </stack.Navigator>
  );
};

export default RootStack;
