import React, {useRef, useState} from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native';
import PhoneInput from "react-native-phone-input";
import Colors from '../Colors';

const Phone =({inputStyle, label, labelStyle, width, ...props}) =>{
    const phoneInput = useRef<PhoneInput>(null);
    const [value, setValue] = useState("");

  return (
    <View style={[styles.container, {width}]} >
        <Text style={[styles.text, {...labelStyle}]}> {label} </Text>
        <View style={[ styles.input_view,{...inputStyle}, ]}>
        <PhoneInput
            // ref={}
            style={{width:"100%", height:"100%", fontSize:17, paddingHorizontal:10}}
        />
      </View>
    </View>
   )

}


const styles = StyleSheet.create({
   container:{
      marginBottom: 20
   },
   input_view:{
       borderWidth: 1,
       borderColor: Colors.gray,
       borderRadius:5
   },
   text:{
       color: Colors.gray,
       fontSize: 16,
   }
})
export default Phone