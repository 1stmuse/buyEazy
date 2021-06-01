/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

import OrderDetail from '../components/OrderDetail';
import Screen from '../components/Screen';

const History = () => {
  return (
    <Screen>
      <ScrollView
        style={styles.orders}
        contentContainerStyle={{paddingHorizontal: 20}}>
        <OrderDetail />
        <OrderDetail />
        <OrderDetail />
        <OrderDetail />
        <OrderDetail />
        <OrderDetail />
        <OrderDetail />
        <OrderDetail />
        <OrderDetail />
        <OrderDetail />
        <OrderDetail />
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  orders: {
    backgroundColor: 'white',
    marginTop: 10,
  },
});
export default History;
