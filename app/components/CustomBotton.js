import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

const CustomBotton =({onPress}) =>{

  return (
      <TouchableOpacity onPress={onPress} >
        <View style={styles.container} >
            <MaterialCommunityIcons name="plus-circle" color="white" size={40} />
            {/* <Text style={{color:'white', fontWeight:'bold'}} >Order</Text> */}
        </View>
      </TouchableOpacity>
   )

}


const styles = StyleSheet.create({
   container:{
      alignItems :'center',
      justifyContent:'center',
      backgroundColor:'tomato',
      height:80,
      width:80,
      borderRadius:40,
      bottom:20,
      borderWidth:10,
      borderColor:'white'
   }
})
export default CustomBotton