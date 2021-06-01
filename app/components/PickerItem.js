/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PickerItem = ({menu, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onPress(menu.label)}
      style={styles.container}>
      <View style={[styles.cat, {backgroundColor: menu.bg}]}>
        {/* <Text style={{fontSize: 15, color: 'white'}}>{menu}</Text> */}
        <MaterialCommunityIcons name={menu.icon} size={40} color="white" />
      </View>
      <Text style={{fontSize: 20}}>{menu.label} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  cat: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginVertical: 15,
    marginHorizontal: 15,
  },
});
export default PickerItem;
