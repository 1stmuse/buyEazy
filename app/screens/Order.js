import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

import Screen from '../components/common/Screen';

const Order = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text>order</Text>
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
