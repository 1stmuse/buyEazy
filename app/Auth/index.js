import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"
import Login from './Login';
import Register from './Register';

const Stack = createStackNavigator()

const Auth =() =>{

  return (
    <Stack.Navigator
        headerMode="none"
    >
        <Stack.Screen component={Login} name="login" />
        <Stack.Screen component={Register} name="register"/>
    </Stack.Navigator>
   )

}

export default Auth;