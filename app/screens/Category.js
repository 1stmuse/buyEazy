/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View, StyleSheet, Text,  FlatList} from 'react-native';
import Colors from '../Colors';
import { Cats } from "../data"

import Screen from '../components/common/Screen';
import SearchHeader from '../components/common/SearchHeader';
import Category from '../components/Category';

const History = () => {
  return (
    <Screen style={{paddingTop: 20, flex:1}}>
      <View style={styles.main}>
        <SearchHeader placeholder="Search Category" />
        <View style={{flexDirection:"row", alignItems:"center"}}>
          <Text style={styles.textLg}>All Category</Text>
          <Text style={styles.textSm}>50</Text>
        </View>
        <View style={{flex:1}}>
          <FlatList
            style={{marginTop:10}}
            contentContainerStyle={{paddingVertical:30}}
            showsVerticalScrollIndicator={false}
            horizontal={false}
            numColumns={2}
            data={Cats}
            renderItem={({item}) => <Category data={item} /> }
          />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal:20,
    marginTop:10,
  },
  textLg:{
    fontSize: 20,
    color: Colors.gray,
    marginRight:15,
    letterSpacing:1.5,
  },
  textSm:{
    fontSize: 18,
    paddingHorizontal: 8,
    paddingVertical: 4,
    color: Colors.white,
    backgroundColor: Colors.primary,
    borderRadius: 4
  }
});
export default History;
