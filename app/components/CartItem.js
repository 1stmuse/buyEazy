import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import Colors from "../Colors";
import { useDispatch } from "react-redux";
import {
  INCREASE_ITEM_QUANTITY,
  DECREASE_ITEM_QUANTITY,
  REMOVE_FROM_CART,
} from "../redux/actions";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();

  const editItemQuantity = (action) => {
    if (action === "inc") {
      dispatch({ type: INCREASE_ITEM_QUANTITY, payload: { id: data.id } });
    } else {
      dispatch({ type: DECREASE_ITEM_QUANTITY, payload: { id: data.id } });
    }
  };

  const removeItem = () => {
    dispatch({ type: REMOVE_FROM_CART, payload: { id: data.id } });
  };

  return (
    <View style={styles.main}>
      <View style={styles.details}>
        <View>
          <Image
            source={{ uri: data.image }}
            style={{ width: 70, height: 70 }}
          />
        </View>
        <View style={styles.info}>
          <Pressable onPress={removeItem}>
            <AntDesign
              style={{ alignSelf: "flex-end" }}
              name="close"
              color={Colors.gray}
              size={16}
            />
          </Pressable>
          <Text style={[styles.qty]}> {data.name.slice(0, 10)}... </Text>
          <Text
            style={[styles.qty, { color: Colors.primary, fontWeight: "bold" }]}
          >
            ${data.price * data.quantity}
          </Text>
        </View>
      </View>
      <View
        style={{ width: "100%", height: 0.4, backgroundColor: Colors.gray }}
      />
      <View style={styles.controls}>
        <Pressable onPress={() => editItemQuantity("dec")}>
          <AntDesign name="minuscircleo" color={Colors.primary} size={18} />
        </Pressable>
        <Text style={styles.qty}>{data.quantity}</Text>
        <Pressable onPress={() => editItemQuantity("inc")}>
          <AntDesign name="pluscircleo" color={Colors.primary} size={18} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    marginBottom: 10,
    // paddingTop: 5,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    minHeight: 100,
    maxHeight: 100,
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 10,
    paddingVertical: 15,
  },
  info: {
    marginLeft: 15,
    width: "100%",
    flex: 1,
  },
  qty: {
    marginHorizontal: 15,
    fontSize: 18,
  },
});
export default CartItem;
