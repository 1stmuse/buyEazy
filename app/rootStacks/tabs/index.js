import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomButton from '../../components/CustomBotton';
import History from '../../screens/History';
import HomeScreen from '../../screens/homeScreen';
import Order from '../../screens/Order';

const tabs = createBottomTabNavigator();

const TabRoot = () => {
  return (
    <tabs.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'black',
        allowFontScaling: true,
        style: {
          height: 60,
        },
      }}>
      <tabs.Screen
        name="homeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <tabs.Screen
        name="order"
        component={Order}
        options={({navigation}) => ({
          tabBarButton: () => (
            <CustomButton onPress={() => navigation.navigate('order')} />
          ),
        })}
      />
      <tabs.Screen
        name="history"
        component={History}
        options={{
          tabBarLabel: 'history',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
        }}
      />
    </tabs.Navigator>
  );
};

export default TabRoot;
