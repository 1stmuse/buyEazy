import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import Account from "../../screens/Account";

const stack = createStackNavigator();

const AccountStacks = () => {

    return (
        <stack.Navigator>
            <stack.Screen name="account" component={Account}/>
        </stack.Navigator>
    )
}

export default AccountStacks