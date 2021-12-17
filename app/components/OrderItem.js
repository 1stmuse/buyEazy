import { AntDesign, Entypo } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Text, Pressable, Modal } from "react-native";
import Colors from "../Colors";
import * as Animatable from "react-native-animatable";

const orderData = {
  id: "yye5r73hf6",
  items: [
    {
      qty: 2,
      name: "iPhone 12 Pro Max",
      price: 300.0,
    },
    {
      qty: 2,
      name: "Samsung Galaxy A50",
      price: 400.0,
    },
  ],
  totalPrice: 700.0,
  payMethod: "Debit Card",
};

const OrderItem = ({ data }) => {
  const [showSumm, setShowSumm] = React.useState(false);

  const OrderSummary = ({ data }) => {
    return (
      <Animatable.View duration={500} animation="slideInUp" style={styles.mod}>
        <View style={{ alignItems: "flex-end" }}>
          <AntDesign
            name="close"
            size={20}
            onPress={() => setShowSumm(false)}
          />
        </View>
        <Text
          style={{
            fontSize: 20,
            marginBottom: 10,
            color: Colors.gray,
            fontWeight: "bold",
          }}
        >
          Order Summary
        </Text>
        <View>
          {data.items.map((ob) => (
            <View key={ob.name} style={styles.center}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.modTxt}>{ob.qty}</Text>
                <Text style={styles.modTxt}>{ob.name}</Text>
              </View>
              <Text style={styles.modTxt}>${ob.price}</Text>
            </View>
          ))}
          <View style={styles.center}>
            <Text style={styles.modTxt}>Delivery charges</Text>
            <Text style={styles.modTxt}>$620.00</Text>
          </View>
          <View style={styles.center}>
            <Text style={styles.modTxt}>Total</Text>
            <Text style={[styles.modTxt, { color: Colors.primary }]}>
              ${data.totalPrice}
            </Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                color: Colors.gray,
                fontWeight: "bold",
                marginBottom: 4,
              }}
            >
              DELIVERY TO
            </Text>
            <Text>1, Adeola Odeku street, VI Lagos</Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                color: Colors.gray,
                fontWeight: "bold",
                marginBottom: 4,
              }}
            >
              PAYMENT METHOD
            </Text>
            <Text>{data.payMethod}</Text>
          </View>
        </View>
      </Animatable.View>
    );
  };

  return (
    <View style={styles.card}>
      <Modal visible={showSumm} transparent animationType="fade">
        <View style={styles.modal}>
          <OrderSummary data={orderData} />
        </View>
      </Modal>
      <View style={styles.center}>
        <Text>Order ID-7857463</Text>
        <Pressable onPress={() => setShowSumm(true)}>
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
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0, 0.2)",
  },
  mod: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  modTxt: {
    fontSize: 18,
  },
});
export default OrderItem;
