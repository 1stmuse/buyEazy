import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

import Screen from '../components/Screen';

const Help = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text>help</Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Help;
