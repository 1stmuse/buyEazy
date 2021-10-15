import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Valid from "../../assets/valid.svg";
import Colors from "../Colors";
import AppButton from "./common/AppButton";

const AddToCartSuccess = ({ goToCart, continueShopping }) => {
  return (
    <View style={styles.container}>
      <Valid />
      <Text style={styles.txt}>Item added to cart successfully</Text>
      <AppButton
        text="CONTINUE SHOPPING"
        onClick={continueShopping}
        style={{
          borderWidth: 1,
          borderColor: Colors.primary,
          width: "100%",
          paddingVertical: 10,
          marginTop: 15,
          borderRadius: 5,
        }}
        textStyle={{
          color: Colors.primary,
        }}
      />
      <AppButton
        text="GO TO CART"
        onClick={goToCart}
        style={{
          backgroundColor: Colors.primary,
          width: "100%",
          paddingVertical: 12,
          marginTop: 15,
          borderRadius: 5,
        }}
        textStyle={{
          color: Colors.white,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: "100%",
    height: "50%",
    maxHeight: 300,
    paddingHorizontal: 20,
  },
  txt: {
    fontSize: 17,
    marginVertical: 10,
  },
});
export default AddToCartSuccess;
