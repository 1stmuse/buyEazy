/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import AppInput from '../components/AppInput';

import Screen from '../components/Screen';
import Colors from "../Colors";
import Category from '../components/Category';

import Cart from "../../assets/shopping_cart.svg";
import Search from "../../assets/Search.svg";
import Phones from "../../assets/images/phones.svg";
import Laptop from "../../assets/images/laptop.svg";
import Watch from "../../assets/images/wristwatch.svg";
import Heels from "../../assets/images/heels.svg";

const HomeScreen = () => {

  return (
    <Screen style={{paddingTop: 20}}>
      <View style={styles.main}>
        <View style={styles.search}>
          <AppInput
            LeftIcon = {() => <Search/>}
            placeholder = "Search for Products"
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
        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
          <Text style={{fontSize:20}} >Top Categories</Text>
          <TouchableOpacity>
            <Text style={{color:Colors.primary, fontWeight:"bold"}}>VIEW MORE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cat}>
            <Category text="Laptop" Img={Laptop} 
              height="70"
              width="200"
              style={{
                width: "23%",
                height: 100
              }}
            />
            <Category text="Phones" Img={Phones}
              height="70"
              width="200"
              style={{
                width: "23%",
                height: 100
              }}
            />
            <Category text="Watch" Img={Watch} 
              height="70"
              width="200"
              style={{
                width: "23%",
                height: 100
              }}
            />
            <Category text="Heels" Img={Heels} 
              height="70"
              width="200"
              style={{
                width: "23%",
                height: 100,
              }}
            />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: 'white',
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    height: "8%",
    marginBottom:20
  },
  cat:{
    flexDirection: "row",
    alignItems:"center",
    width:"100%",
    justifyContent:"space-between",
    marginTop:10
  }
});
export default HomeScreen;
