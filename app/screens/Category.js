/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

import Screen from '../components/Screen';

const History = () => {
  return (
    <Screen>
      <View>
        <Text>order</Text>
      </View>
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
