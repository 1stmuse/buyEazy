import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import OPTInputView from "react-native-otp-field";
import Colors from '../Colors';

const VerifyOtp =() =>{

  return (
    <View style={styles.container} >
        <Text>hello</Text>
        <OPTInputView>
            containerStyleObject={{width: 50, height:200, borderWidth:1, backgroundColor:"red"}}
            length={4}
            value={"1234"}
            {/* autoFocusOnLoad={true} */}
        </OPTInputView>
    </View>
   )

}


const styles = StyleSheet.create({
   container:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: Colors.white
   }
})
export default VerifyOtp