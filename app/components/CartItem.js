import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Colors from "../Colors";

const CartItem = ({ data }) => {
  return (
    <View style={styles.main}>
      <View style={styles.details}>
        <View>
          <Image source={data.image} style={{ width: 70, height: 70 }} />
        </View>
        <View style={styles.info}>
          <AntDesign
            style={{ alignSelf: "flex-end" }}
            name="close"
            color={Colors.gray}
            size={16}
          />
          <Text style={[styles.qty]}> {data.name} </Text>
          <Text
            style={[styles.qty, { color: Colors.primary, fontWeight: "bold" }]}
          >
            ${data.price}
          </Text>
        </View>
      </View>
      <View
        style={{ width: "100%", height: 0.4, backgroundColor: Colors.gray }}
      />
      <View style={styles.controls}>
        <AntDesign name="minuscircleo" color={Colors.primary} size={18} />
        <Text style={styles.qty}>1</Text>
        <AntDesign name="pluscircleo" color={Colors.primary} size={18} />
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
