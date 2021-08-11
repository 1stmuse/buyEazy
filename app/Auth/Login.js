import React, {useState, useCallback} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Alert
} from "react-native";
import Logo from "../../assets/logo.svg";
import Colors from "../Colors";
import AppButton from "../components/common/AppButton";
import AppInput from "../components/common/AppInput";
import Google from "../../assets/google.svg";
import Facebook from "../../assets/facebook.svg";
import { login } from "../api/auth"

const Login = ({navigation}) => {
  const { width, height } = useWindowDimensions();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submit = useCallback(async () =>{

    const response = await login({email, password})
    if(response.ok) {
      // console.log(response.data.token)
      await AsyncStorage.setItem('token', response.data.token)
      return
    }
    Alert.alert("Error", response.data.message,)
    console.log(response.data.message) 
  }, [email, password])

  return (
    <View style={[styles.container]}>
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
          onChange={(text) => setPassword(text)}
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
        <TouchableOpacity onPress={() => navigation.navigate("forgot_password")} style={{ alignSelf: "flex-end" }}>
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
            height:50,
            borderRadius: 6,
            marginTop: 20
          }}
          textStyle={{
              color: Colors.white
          }}
        />
        <View style={styles.orCont}>
          <View style={styles.line}/>
          <Text style={{fontSize:20, marginHorizontal:15}}>OR</Text>
          <View style={styles.line}/>
        </View>
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
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("register")} >
            <Text style={{marginLeft:3, color:Colors.primary, fontWeight:"bold"}}>Create a new account</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop:20}}>
          <TouchableOpacity>
            <Text style={{color:Colors.primary, fontWeight:"bold", fontSize:17}}>Skip sign in</Text>
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
export default Login;
