/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, createRef} from 'react';
import ActionSheet from 'react-native-actions-sheet';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

import Screen from '../components/Screen';

const FoodDetails = ({route, navigation}) => {


  return (
    <Screen>
      <View style={{flex: 1}}>
        <Text>detauos</Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  actions: {
    padding: 15,
    flex: 1,
  },
  addContent: {
    backgroundColor: 'tomato',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  contentAction: {},
  contentActionText: {
    alignSelf: 'center',
    fontSize: 25,
  },
  actionText: {
    minWidth: 80,
    textAlign: 'center',
    fontSize: 20,
  },
  contentWrapper: {
    marginVertical: 20,
  },
  container: {
    flex: 1,
  },
  orderButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
    width: '100%',
  },
  orderButton: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: 'tomato',
    padding: 12,
    borderRadius: 25,
  },
  text: {
    color: 'blue',
    alignSelf: 'center',
    fontSize: 20,
  },
});
export default FoodDetails;
