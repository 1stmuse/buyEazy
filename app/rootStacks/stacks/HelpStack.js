import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Help from "../../screens/Help"

const stack = createStackNavigator();

const HelpStacks = () => {

    return (
        <stack.Navigator>
            <stack.Screen name="help" component={Help}/>
        </stack.Navigator>
    )
}

export default HelpStacks