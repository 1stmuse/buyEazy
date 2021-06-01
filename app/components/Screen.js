import React from 'react';
import {StyleSheet, StatusBar, SafeAreaView, Platform} from 'react-native';

const Screen = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.screen, {...style}]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
export default Screen;
