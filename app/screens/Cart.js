import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import Colors from "../Colors";
import CartItem from "../components/CartItem";
import AppButton from "../components/common/AppButton";
import { Products } from "../data";

const Cart = () => {
  const data = Products[1];
  return (
    <ScrollView
      contentContainerStyle={{
        paddingVertical: 20,
      }}
      style={styles.container}
    >
      <CartItem data={data} />
      <CartItem data={data} />
      <CartItem data={data} />
      <CartItem data={data} />
      {/* <CartItem data={data} /> */}
      {/* <CartItem data={data} /> */}
      {/* <CartItem data={data} /> */}
      <View style={styles.cartSum}>
        <View style={styles.spaceCenter}>
          <Text>Total Items (1)</Text>
          <Text>$600.00</Text>
        </View>
        <AppButton
          text="CHECKOUT"
          style={{
            backgroundColor: Colors.primary,
            width: "100%",
            paddingVertical: 10,
            borderRadius: 10,
            marginTop: 20,
          }}
          textStyle={{
            color: Colors.white,
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    // paddingTop: 10,
  },
  spaceCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cartSum: {
    marginTop: 15,
  },
});
export default Cart;
