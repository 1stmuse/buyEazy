import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Cart from "../../../assets/shopping_cart.svg";
import Search from "../../../assets/Search.svg";
import AppInput from './AppInput';

const SearchHeader =({placeholder}) =>{

  return (
    <View style={styles.search}>
    <AppInput
      LeftIcon = {() => <Search/>}
      placeholder = {placeholder}
      inputStyle={{
        height: "100%",
      }}
      containerStyle={{
        height: "100%",
        width: "85%"
      }}
    />
    <View style={{width: "10%", marginLeft:"5%"}}>
      <Cart />
    </View>
  </View>
   )

}


const styles = StyleSheet.create({
    search: {
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        marginBottom:20
      },
})
export default SearchHeader