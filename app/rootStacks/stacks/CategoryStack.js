import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Cartegory from '../../screens/Category';

const stack = createStackNavigator();

const CategoryStacks = () => {

    return (
        <stack.Navigator>
            <stack.Screen  
                name="category" 
                component={Cartegory}
                options={{
                    headerShown: false
                }}
            />
        </stack.Navigator>
    )
}

export default CategoryStacks