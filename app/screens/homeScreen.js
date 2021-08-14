/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import AppInput from '../components/common/AppInput';

import Screen from '../components/common/Screen';
import Colors from "../Colors";
import Category from '../components/Category';
import ProductCard from '../components/common/ProductCard';
import Swipers from "../components/homepage/Swiper"

import Cart from "../../assets/shopping_cart.svg";
import Search from "../../assets/Search.svg";
import Phones from "../../assets/images/phones.svg";
import Laptop from "../../assets/images/laptop.svg";
import Watch from "../../assets/images/wristwatch.svg";
import Heels from "../../assets/images/heels.svg";

import { Products } from "../data"

const {height} = Dimensions.get("screen")

const HomeScreen = () => {

  return (
    <Screen style={{paddingTop: 20, flex:1}}>
      <ScrollView style={{flex:1}}>
        <View style={styles.main}>
          <View style={{paddingHorizontal:20,}}>
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
                  height="50"
                  width="200"
                  style={{
                    width: "23%",
                    height: 80
                  }}
                />
                <Category text="Phones" Img={Phones}
                  height="50"
                  width="200"
                  style={{
                    width: "23%",
                    height: 80
                  }}
                />
                <Category text="Watch" Img={Watch} 
                  height="50"
                  width="200"
                  style={{
                    width: "23%",
                    height: 80
                  }}
                />
                <Category text="Heels" Img={Heels} 
                  height="50"
                  width="200"
                  style={{
                    width: "23%",
                    height: 80,
                  }}
                />
            </View>
          </View>
          <View style={{height:200, marginBottom:10}}>
            <Swipers/>
          </View>
          <View style={{paddingHorizontal:20,}}>
            <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
              <Text style={{fontSize:20}} >Recommended</Text>
                <TouchableOpacity>
                  <Text style={{color:Colors.primary, fontWeight:"bold"}}>VIEW MORE</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.products} >
              {Products.map((ob) => (
                <View style={styles.product}>
                  <ProductCard data={ob} />
                </View>
              ))}
            </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 10,
    backgroundColor: 'white',
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    marginBottom:20
  },
  cat:{
    flexDirection: "row",
    alignItems:"center",
    width:"100%",
    justifyContent:"space-between",
    marginVertical:10
  },
  products:{
    flex:1,
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-between",
    width:"100%",
    paddingHorizontal:20,
    marginTop:20
  },
  product: {
    width:"45%",
    borderRadius:10,
    overflow:"hidden",
    borderWidth:0.3,
    borderColor:"#e4e4e4",
    marginBottom:15,
    elevation:0.5
  }
});
export default HomeScreen;
