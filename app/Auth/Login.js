import React from "react";
import {
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import Logo from "../../assets/logo.svg";
import Colors from "../Colors";
import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";

const Login = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={[styles.container]}>
      <View style={[styles.logo, { marginTop: height * 0.1 }]}>
        <Logo />
      </View>
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Text style={styles.sign_in}>Sign in to your account</Text>
      </View>
      <View style={[styles.body, { paddingHorizontal: width * 0.05, width }]}>
        <AppInput
          label="Email Address"
          width="100%"
          inputStyle={{
            height: 50,
          }}
          labelStyle={{
            marginBottom: 8,
          }}
        />
        <AppInput
          label="Password"
          width="100%"
          inputStyle={{
            height: 50,
          }}
          labelStyle={{
            marginBottom: 8,
          }}
        />
        <TouchableOpacity style={{ alignSelf: "flex-end" }}>
          <Text style={{ color: Colors.primary, fontSize: 16 }}>
            Forgot Password ?
          </Text>
        </TouchableOpacity>
        <AppButton
          text="SIGN IN"
          style={{
            backgroundColor: Colors.primary,
            width: "100%",
            height:50,
            borderRadius: 6,
            marginTop: 20
          }}
          textStyle={{
              color: Colors.white
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
  },
  sign_in: {
    color: Colors.gray,
    fontSize: 23,
    fontWeight: "bold",
  },
  body: {
    flex: 1,
    alignItems: "center",
    //   width:"100%"
  },
});
export default Login;
