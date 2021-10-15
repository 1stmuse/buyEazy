import { AntDesign, Entypo } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import Colors from "../Colors";

const OrderItem = ({ data }) => {
  return (
    <View style={styles.card}>
      <View style={styles.center}>
        <Text>Order ID-7857463</Text>
        <Pressable>
          <Text style={styles.redBtn}>ORDER SUMMARY</Text>
        </Pressable>
      </View>
      <Text>Order Date: 24-10-2020</Text>
      <View>
        <View style={[styles.center]}>
          <Text>Total Price</Text>
          <Text>$620.00</Text>
        </View>
        <View style={[styles.center]}>
          <Text>Number of Items</Text>
          <Text>2</Text>
        </View>
      </View>
      <View style={styles.trackView}>
        <Entypo name="trash" size={20} color={Colors.primary} />
        <Pressable>
          <Text style={[styles.redBtn, { marginLeft: 20 }]}>VIEW TRACKING</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // elevation: 2,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  center: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  trackView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "flex-start",
  },
  redBtn: {
    color: Colors.primary,
  },
});
export default OrderItem;
