import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

import {menus} from '../data';
import Screen from '../components/Screen';
import FoodListing from '../components/FoodListing';

const Order = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <View>
          <Text>what are you craving ?</Text>
          <View style={{minHeight: 150}}>
            <FlatList
              data={menus}
              renderItem={({item}) => <FoodListing food={item} />}
              keyExtractor={({name}) => name}
              contentContainerStyle={{padding: 10}}
              horizontal
              bounces={true}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
        <View>
          <Text>Drinks</Text>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Order;
