import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// import screens
import TabRoot from './tabs/index';
import FoodDetails from '../screens/FoodDetails';

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
      <stack.Screen name="homeRoot" children={TabRoot} options={{...options}} />
      <stack.Screen name="foodDetail" component={FoodDetails} />
    </stack.Navigator>
  );
};

export default RootStack;
