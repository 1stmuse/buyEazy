import React, { useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import Colors from "../Colors";
import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";
import { login } from "../api/auth";

const ResetPassword = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const [phone, setNumber] = useState("");

  //   const submit = useCallback(async () =>{

  //     const response = await login({phone,})
  //     if(response.ok) {
  //       // console.log(response.data.token)
  //       await AsyncStorage.setItem('token', response.data.token)
  //       return
  //     }
  //     Alert.alert("Error", response.data.message,)
  //     console.log(response.data.message)
  //   }, [phone])

  return (
    <View style={[styles.container]}>
      <View style={{ width, alignItems: "flex-end", paddingHorizontal: 20 }}>
        <TouchableOpacity
          style={{ marginTop: 10 }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ fontSize: 17 }}>Back</Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.logo,
          { marginTop: height * 0.1, marginTop: height * 0.14 },
        ]}
      >
        <Text style={styles.sign_in}>Create a new password</Text>
      </View>
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Text style={styles.text}>
          Enter your new preferred password
        </Text>
      </View>
      <View style={[styles.body, { paddingHorizontal: width * 0.05, width }]}>
        <AppInput
          label="New Password"
          containerStyle={{
            width: "100%",
            marginBottom:20
          }}
          value={phone}
          onChange={(text) => setNumber(text)}
          keyboardType="number-pad"
          autoCapitalize="none"
          inputStyle={{
            height: 50,
          }}
          labelStyle={{
            marginBottom: 8,
          }}
        />

        <AppInput
          label="Re-enter new password"
          width="100%"
          value={phone}
          onChange={(text) => setNumber(text)}
          keyboardType="number-pad"
          autoCapitalize="none"
          inputStyle={{
            height: 50,
          }}
          labelStyle={{
            marginBottom: 8,
          }}
        />

        <AppButton
          text="RESET PASSWORD"
          //   onClick={submit}
          onClick={() => navigation.navigate("verify_otp")}
          style={{
            backgroundColor: Colors.primary,
            width: "100%",
            height: 50,
            borderRadius: 6,
            marginTop: 20,
          }}
          textStyle={{
            color: Colors.white,
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
    fontSize: 27,
    fontWeight:"bold"
  },
  text: {
    color: "black",
    textAlign: "center",
    fontSize: 19,
  },
  body: {
    flex: 1,
    alignItems: "center",
  },
});
export default ResetPassword;
