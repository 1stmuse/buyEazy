import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const AppButton =({text, style, textStyle, Icon, onClick}) =>{

  return (
    // <View style={[styles.container, {...style}]} >
      <TouchableOpacity onPress={onClick} activeOpacity={0.7} style={[styles.container, {...style}]}>
        {Icon && <Icon/>}
          <Text style={[ styles.text,{...textStyle},{marginLeft : Icon && 10}]}> {text} </Text>
      </TouchableOpacity>
    // </View>
   )

}


const styles = StyleSheet.create({
   container:{
    //   flex:1,
    flexDirection:"row",
      alignItems: "center",
      justifyContent: "center"
   },
   text:{
       fontSize: 16,
   }
})
export default AppButton