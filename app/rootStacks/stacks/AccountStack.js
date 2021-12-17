import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Profile from "../../screens/profile/Profile";
import Settings from "../../screens/profile/Settings";
import EditProfile from "../../screens/profile/EditProfile";
import Colors from "../../Colors";

const stack = createStackNavigator();

const AccountStacks = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="profile"
        component={Profile}
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Profile",
          // headerTintColor: Colors.white,
          headerStyle: {
            // backgroundColor: Colors.primary,
            borderBottomWidth: 0,
          },
        }}
      />
      <stack.Screen
        name="settings"
        component={Settings}
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Settings",
          // headerTintColor: Colors.white,
          headerStyle: {
            // backgroundColor: Colors.primary,
            borderBottomWidth: 0,
          },
        }}
      />
      <stack.Screen
        name="edit_profile"
        component={EditProfile}
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Edit Profile",
          // headerTintColor: Colors.white,
          headerStyle: {
            // backgroundColor: Colors.primary,
            borderBottomWidth: 0,
          },
        }}
      />
    </stack.Navigator>
  );
};

export default AccountStacks;
