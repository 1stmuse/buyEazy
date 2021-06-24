import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"
import Login from './Login';

const Stack = createStackNavigator()

const Auth =() =>{

  return (
    <Stack.Navigator
        headerMode="none"
    >
        <Stack.Screen component={Login} name="login" />
    </Stack.Navigator>
   )

}

export default Auth;