import React, { useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import Logo from "../../assets/logo.svg";
import Colors from "../Colors";
import AppButton from "../components/common/AppButton";
import AppInput from "../components/common/AppInput";
import Google from "../../assets/google.svg";
import Facebook from "../../assets/facebook.svg";
import { register } from "../api/api";
import { Snackbar } from "react-native-paper";

const Register = ({ navigation }) => {
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const { width, height } = useWindowDimensions();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const submit = useCallback(async () => {
    if (email === "" && password === "" && phone === "" && name === "") return;
    const dataToSubmit = {
      email,
      fullname: name,
      password,
      phone_number: phone,
    };
    const { data, ok } = await register(dataToSubmit);
    if (!ok) {
      setError(data.message);
      setShowError(true);
      return;
    }

    setName("");
    setPassword("");
    setPhone("");
    setEmail("");
    navigation.navigate("login");
  }, [email, password, phone, name]);
  return (
    <ScrollView
      contentContainerStyle={{
        marginBottom: 20,
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
        <View style={[styles.logo, { marginTop: height * 0.04 }]}>
          <Logo />
        </View>
        <View style={{ alignItems: "center", marginVertical: 10 }}>
          <Text style={styles.sign_in}>Create an account</Text>
        </View>
        <View style={[styles.body, { paddingHorizontal: width * 0.05, width }]}>
          <AppInput
            label="Full Name"
            value={name}
            onChange={(text) => setName(text)}
            containerStyle={{
              width: "100%",
              marginBottom: 20,
            }}
            autoCapitalize="none"
            inputStyle={{
              height: 50,
            }}
            labelStyle={{
              marginBottom: 8,
            }}
          />
          <AppInput
            label="Email Address"
            keyboardType="email-address"
            value={email}
            onChange={(text) => setEmail(text)}
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
            label="Phone Number"
            value={phone}
            onChange={(text) => setPhone(text)}
            keyboardType="phone-pad"
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
            value={password}
            onChange={(text) => setPassword(text)}
            secureTextEntry
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
          <AppButton
            text="SIGN UP"
            onClick={submit}
            style={{
              backgroundColor: Colors.primary,
              width: "100%",
              height: 50,
              borderRadius: 6,
            }}
            textStyle={{
              color: Colors.white,
            }}
          />
          <View style={{ flexDirection: "row", marginVertical: 20 }}>
            <Pressable style={{ marginRight: 10 }}>
              <Google />
            </Pressable>
            <Pressable style={{ marginLeft: 10 }}>
              <Facebook />
            </Pressable>
          </View>

          <View style={styles.create}>
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
              <Text
                style={{
                  marginLeft: 3,
                  color: Colors.primary,
                  fontWeight: "bold",
                }}
              >
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
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
});
export default Register;
