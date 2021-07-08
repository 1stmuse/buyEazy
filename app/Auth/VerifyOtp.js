import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import OPTInputView from "react-native-otp-field";
import {OTP} from 'react-native-otp-form';
import Colors from '../Colors';
import AppButton from '../components/AppButton';

const VerifyOtp =({navigation}) =>{

  return (
    <View style={styles.container} >
        <Text style={styles.text}>Please Input digits OTP sent to your phone</Text>
        <View>
         <OTP
         codeCount={5}
         containerStyle={{marginTop: 50}}
         otpStyles={{ borderBottomWidth:1}}
         />
        </View>
        {/* <View> */}
         <AppButton
            text="VERIFY"
            //   onClick={submit}
            onClick={() => navigation.navigate("reset_password")}
            style={{
               backgroundColor: Colors.primary,
               width: "100%",
               height: 50,
               borderRadius: 6,
               marginTop: 20,
               justifyContent:"center",
               alignItems:"center"
            }}
            textStyle={{
               color: Colors.white,
            }}
         />
        {/* </View> */}
        {/* <OPTInputView>
            containerStyleObject={{width: 50, height:200, borderWidth:1, backgroundColor:"red"}}
            length={4}
            value={"1234"}
        </OPTInputView> */}
    </View>
   )

}


const styles = StyleSheet.create({
   container:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal:10,
      backgroundColor: Colors.white
   },
   text: {
      color: Colors.primary,
      fontSize:20,
      textAlign: "center",
      fontWeight:'bold'
   }
})
export default VerifyOtp
