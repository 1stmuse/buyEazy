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
import Google from "../../assets/google.svg";
import Facebook from "../../assets/facebook.svg";

const Register = ({navigation}) => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={[styles.container]}>
      <View style={[styles.logo, { marginTop: height * 0.04 }]}>
        <Logo />
      </View>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <Text style={styles.sign_in}>Create an account</Text>
      </View>
      <View style={[styles.body, { paddingHorizontal: width * 0.05, width }]}>
        <AppInput
          label="Full Name"
          containerStyle={{
            width: "100%",
            marginBottom:20
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
          autoCapitalize="none"
          containerStyle={{
            width: "100%",
            marginBottom:20
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
          keyboardType="phone-pad"
          autoCapitalize="none"
          containerStyle={{
            width: "100%",
            marginBottom:20
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
          secureTextEntry
          containerStyle={{
            width: "100%",
            marginBottom:20
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
          style={{
            backgroundColor: Colors.primary,
            width: "100%",
            height:50,
            borderRadius: 6,
          }}
          textStyle={{
              color: Colors.white
          }}
        />
        <AppButton
          text="SIGN IN WITH GOOGLE"
          style={{
            width: "100%",
            height:50,
            borderRadius: 6,
            borderWidth:1,
            borderColor: Colors.primary,
            marginTop: 10
          }}
          textStyle={{
              color: Colors.primary,
              fontWeight: "bold",
          }}
          Icon={() =><Google/>}
        />
        <AppButton
          text="SIGN IN WITH FACEBOOK"
          style={{
            width: "100%",
            height:50,
            borderRadius: 6,
            borderWidth:1,
            borderColor: Colors.blue,
            marginTop: 20
          }}
          textStyle={{
              color: Colors.blue,
              fontWeight: "bold",
          }}
          Icon={() =><Facebook/>}
        />
        <View style={styles.create} >
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text style={{marginLeft:3, color:Colors.primary, fontWeight:"bold"}}>Sign in</Text>
          </TouchableOpacity>
        </View>
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
  orCont:{
    flexDirection: "row",
    alignItems:"center",
    marginVertical:15
  },
  line:{
    flex:1,
    height: 1,
    backgroundColor: Colors.gray
  },
  create: {
    flexDirection:"row",
    marginTop:20
  },
});
export default Register;
