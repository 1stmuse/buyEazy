import React, { useState, useCallback } from "react";
import storage from "@react-native-async-storage/async-storage";
import {
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import Logo from "../../assets/logo.svg";
import Colors from "../Colors";
import AppButton from "../components/common/AppButton";
import AppInput from "../components/common/AppInput";
import Google from "../../assets/google.svg";
import Facebook from "../../assets/facebook.svg";
import { login } from "../api/api";
import { Snackbar } from "react-native-paper";
import { useDispatch } from "react-redux";
import { LOGIN_ACTION } from "../redux/actions";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const { width, height } = useWindowDimensions();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = useCallback(async () => {
    // await storage.removeItem("visited");
    // console.log("cleared");
    // console.log(height);
    const { data, ok } = await login({ email, password });
    if (!ok) {
      setError(data.message);
      setShowError(true);
      return;
    }

    await storage.setItem("token", data.token);
    dispatch({
      type: LOGIN_ACTION,
      payload: { authed: true, token: data.token },
    });
    // navigation.navigate("home");
    // return;

    // Alert.alert("Error", response.data.message);
  }, [email, password]);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 20,
      }}
      style={[styles.container]}
    >
      <View style={{ flex: 1, minHeight: height }}>
        <Snackbar
          style={{
            position: "absolute",
            bottom: height * 0.9,
          }}
          visible={showError}
          onDismiss={() => setShowError(false)}
          action={{
            label: "Close",
            onPress: () => {
              setShowError(false);
            },
          }}
        >
          {error}
        </Snackbar>
        <View style={[styles.logo, { marginTop: height * 0.1 }]}>
          <Logo />
        </View>
        <View style={{ alignItems: "center", marginVertical: 10 }}>
          <Text style={styles.sign_in}>Sign in to your account</Text>
        </View>
        <View style={[styles.body, { paddingHorizontal: width * 0.05, width }]}>
          <AppInput
            label="Email Address"
            value={email}
            onChange={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
            containerStyle={{
              width: "100%",
              marginBottom: 20,
            }}
            inputStyle={{
              height: 50,
            }}
            labelStyle={{
              marginBottom: 8,
            }}
          />
          <AppInput
            label="Password"
            onChange={(text) => setPassword(text)}
            secureTextEntry
            value={password}
            containerStyle={{
              width: "100%",
              marginBottom: 20,
            }}
            inputStyle={{
              height: 50,
            }}
            labelStyle={{
              marginBottom: 8,
            }}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("forgot_password")}
            style={{ alignSelf: "flex-end" }}
          >
            <Text style={{ color: Colors.primary, fontSize: 16 }}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
          <AppButton
            text="SIGN IN"
            onClick={submit}
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
          <View style={styles.orCont}>
            <View style={styles.line} />
            <Text style={{ fontSize: 20, marginHorizontal: 15 }}>OR</Text>
            <View style={styles.line} />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Pressable style={{ marginRight: 10 }}>
              <Google />
            </Pressable>
            <Pressable style={{ marginLeft: 10 }}>
              <Facebook />
            </Pressable>
          </View>

          <View style={styles.create}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("register")}>
              <Text
                style={{
                  marginLeft: 3,
                  color: Colors.primary,
                  fontWeight: "bold",
                }}
              >
                Create a new account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.skip}>
          <TouchableOpacity>
            <Text
              style={{
                color: Colors.primary,
                fontWeight: "bold",
                fontSize: 17,
              }}
            >
              Skip sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    position: "relative",
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
  orCont: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.gray,
  },
  create: {
    flexDirection: "row",
    marginTop: 20,
  },
  skip: {
    flex: 1,
    position: "absolute",
    bottom: 10,
    right: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Login;
