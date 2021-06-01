import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const OrderDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text style={styles.text}>Order Id</Text>
        <Text style={styles.text}>Price</Text>
        <Text style={styles.text}>Status</Text>
      </View>
      <View style={styles.label}>
        <Text style={styles.text}>-</Text>
        <Text style={styles.text}>-</Text>
        <Text style={styles.text}>-</Text>
      </View>
      <View style={styles.label}>
        <Text style={styles.text}>235617</Text>
        <Text style={styles.text}>#250.00</Text>
        <Text style={styles.text}>Pending</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    paddingVertical: 20,
    backgroundColor: 'tomato',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    elevation: 5,
    borderRadius: 5,
    //   opacity:0.7
  },
  label: {
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default OrderDetail;
