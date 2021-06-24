import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native';
import Colors from '../Colors';

const AppInput =({inputStyle, label, labelStyle, width, props}) =>{

  return (
    <View style={[styles.container, {width}]} >
        <Text style={[styles.text, {...labelStyle}]}> {label} </Text>
        <View style={[ styles.input_view,{...inputStyle}, ]}>
        <TextInput
            {...props}
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
export default AppInput