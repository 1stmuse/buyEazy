import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import VerifyOtp from './VerifyOtp';
import ResetPassword from './ResetPassword';

const Stack = createStackNavigator()

const Auth =() =>{

  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
    >
        <Stack.Screen component={Login} name="login" />
        <Stack.Screen component={Register} name="register"/>
        <Stack.Screen component={ForgotPassword} name="forgot_password"/>
        <Stack.Screen component={VerifyOtp} name="verify_otp"/>
        <Stack.Screen component={ResetPassword} name="reset_password"/>
    </Stack.Navigator>
   )

}

export default Auth;