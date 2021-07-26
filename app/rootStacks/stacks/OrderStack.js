import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Order from '../../screens/Order';

const stack = createStackNavigator();

const OrderStacks = () => {

    return (
        <stack.Navigator>
            <stack.Screen name="order" component={Order}/>
        </stack.Navigator>
    )
}

export default OrderStacks