/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

import {menus} from '../data';
import Screen from '../components/Screen';
import RandomFoodCard from '../components/RandomFoodCard';
import AppPicker from '../components/AppPicker';

const categories = [
  {
    id: '1',
    icon: 'keg',
    label: 'dessert',
    bg: 'red',
  },
  {
    id: '2',
    icon: 'chili-hot',
    label: 'breakfast',
    bg: 'green',
  },
  {
    id: '3',
    icon: 'mushroom-outline',
    label: 'lunch',
    bg: 'blue',
  },
  {
    id: '4',
    icon: 'soy-sauce',
    label: 'dinner',
    bg: 'tomato',
  },
];

const HomeScreen = () => {
  const [category, setCategory] = useState('');
  const selectCatgeory = (cat) => {
    setCategory(cat);
  };
  return (
    <Screen style={{paddingTop: 20}}>
      <View>
        <AppPicker
          selectedItem={category}
          placeholder="Category"
          icon="apps"
          menus={categories}
          selectCat={selectCatgeory}
        />
      </View>
      <View style={styles.main}>
        <FlatList
          data={menus}
          renderItem={({item}) => <RandomFoodCard food={item} />}
          keyExtractor={({name}) => name}
          bounces={true}
          showsVerticalScrollIndicator={false}
        />
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
});
export default HomeScreen;
