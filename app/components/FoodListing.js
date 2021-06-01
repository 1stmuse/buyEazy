import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

const FoodListing = ({food}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.main}>
      <View style={styles.container}>
        <View style={{width: '100%', height: '100%'}}>
          <Image
            source={food.img}
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>
      <View style={styles.text}>
        <Text style={{textAlign: 'center'}}>{food.name} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100 / 2,
    overflow: 'hidden',
  },
  main: {
    width: 100,
    height: 100,
    marginRight: 15,
    // borderWidth: 1,
  },
  text: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FoodListing;
