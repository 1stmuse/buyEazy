import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Feather, Ionicons } from '@expo/vector-icons'; 

import Colors from "../../Colors"

// import CustomButton from '../../components/CustomBotton';
import HomeStacks from '../stacks/HomeStack';
import OrderStacks from '../stacks/OrderStack';
import AccountStacks from '../stacks/AccountStack';
import CategoryStacks from '../stacks/CategoryStack';
import HelpStacks from '../stacks/HelpStack';

const tabs = createBottomTabNavigator();

const TabRoot = () => {
  return (
    <tabs.Navigator
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: 'black',
        allowFontScaling: true,
        style: {
          height: 60,
        },
      }}>
      <tabs.Screen
        name="home"
        component={HomeStacks}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <tabs.Screen
        name="category"
        component={CategoryStacks}
        options={{
          tabBarLabel: "Category",
          tabBarIcon: ({color, size}) => (
            <Ionicons name="options-outline" size={size} color={color} />
          ),
        }}
      />
      <tabs.Screen
        name="orders"
        component={OrderStacks}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color, size}) => (
            <Feather name="shopping-bag" size={size} color={color} />
          ),
        }}
      />
      <tabs.Screen
        name="account"
        component={AccountStacks}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <tabs.Screen
        name="help"
        component={HelpStacks}
        options={{
          tabBarLabel: 'Help',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="help-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </tabs.Navigator>
  );
};

export default TabRoot;
