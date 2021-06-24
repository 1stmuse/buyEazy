import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const AppButton =({text, style, textStyle}) =>{

  return (
    // <View style={[styles.container, {...style}]} >
      <TouchableOpacity activeOpacity={0.7} style={[styles.container, {...style}]}>
          <Text style={[ styles.text,{...textStyle}]}> {text} </Text>
      </TouchableOpacity>
    // </View>
   )

}


const styles = StyleSheet.create({
   container:{
    //   flex:1,
      alignItems: "center",
      justifyContent: "center"
   },
   text:{
       fontSize: 16,
   }
})
export default AppButton