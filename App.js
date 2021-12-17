import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import storage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import { store } from "./app/redux/store";
import { Provider } from "react-redux";
import { createStore } from "redux";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch } from "react-redux";
import { LOGIN_ACTION } from "./app/redux/actions";
import Onboarding from "./app/onBoarding";
import Auth from "./app/Auth";
import RootStack from "./app/rootStacks";

const Store = createStore(store);
const stack = createStackNavigator();

const Main = () => {
  const [visited, setVisited] = useState(false);
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const getVisit = async () => {
    try {
      const value = await storage.getItem("visited");

      if (value === null) {
        await storage.setItem("visited", "true");
        setVisited(false);
        // return;
      } else {
        setVisited(true);
      }
    } catch (error) {
      setVisited(false);
    }
  };

  const getAuth = async () => {
    try {
      const tokenStore = await storage.getItem("token");
      if (tokenStore !== null) {
        dispatch({
          type: LOGIN_ACTION,
          payload: { authed: true, token: tokenStore },
        });
      }
    } catch (error) {
      dispatch({ type: LOGINOUT_ACTION });
    }
  };

  useEffect(() => {
    getVisit();
    getAuth();
  }, []);

  if (!visited) {
    return (
      <stack.Navigator headerMode="none">
        <stack.Screen name="onboard" component={Onboarding} />
        <stack.Screen name="auth" component={Auth} />
      </stack.Navigator>
    );
  } else if (!user.authed) {
    return <Auth />;
  } else {
    return <RootStack />;
  }

  // return (
  //   <Screen>
  //     <NavigationContainer>
  //       {visited === true ? (
  //         <Onboarding />
  //       ) : !user.authed ? (
  //         <Auth />
  //       ) : (
  //         <RootStack />
  //       )}
  //     </NavigationContainer>
  //   </Screen>
  // );
};

const App = () => {
  return (
    <Provider store={Store}>
      <StatusBar
        barStyle="light-content"
        translucent
        // backgroundColor={Colors.white}
      />
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
