import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import Colors from "../Colors";
import CartItem from "../components/CartItem";
import AppButton from "../components/common/AppButton";
import { Products } from "../data";
import { useDispatch, useSelector } from "react-redux";

const Cart = ({ navigation }) => {
  const { cartItems, numberOfItems } = useSelector((state) => state.cart);

  const totalPrice = cartItems.reduce((acc, val) => {
    return (acc += val.price * val.quantity);
  }, 0);

  const checkout = () => {
    navigation.navigate("checkout");
  };
  return (
    <ScrollView
      contentContainerStyle={{
        paddingVertical: 20,
      }}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {cartItems.map((ob) => (
        <CartItem data={ob} key={ob.id} />
      ))}

      <View style={styles.cartSum}>
        <View style={styles.spaceCenter}>
          <Text>Total Items ({numberOfItems})</Text>
          <Text>{`$${totalPrice.toFixed(2)}`}</Text>
        </View>
        <AppButton
          text="CHECKOUT"
          onClick={checkout}
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
