import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Modal,
} from "react-native";
import Colors from "../Colors";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Valid from "../../assets/valid.svg";
import AppButton from "./common/AppButton";

const Payment = () => {
  const [method, setMethod] = React.useState("card");
  const [showModal, setShowModal] = React.useState(false);
  const [showPaySuccess, setShowPaySuccess] = React.useState(false);
  const navigation = useNavigation();

  const nextAction = () => {
    if (method === "card") {
      setShowModal(true);
      return;
    }
    setShowPaySuccess(true);
  };

  const conFirmCardPay = () => {
    setShowModal(false);
    setShowPaySuccess(true);
  };

  const PaymentSuccessful = () => {
    return (
      <View style={styles.confirmCard}>
        <Valid />
        <Text
          style={{
            textAlign: "center",
            // fontSize: 17,
            marginVertical: 20,
          }}
        >
          Purchase Successfull
        </Text>
        <AppButton
          text="CONTINUE SHOPPING"
          onClick={() => setShowPaySuccess(false)}
          style={{
            ...styles.btnD,
            backgroundColor: "white",
            borderColor: Colors.primary,
            borderWidth: 1,
            marginVertical: 5,
          }}
          textStyle={{
            color: Colors.primary,
            fontWeight: "bold",
          }}
        />
        <AppButton
          text="VIEW YOUR ORDERS"
          onClick={() => navigation.navigate("orders")}
          style={{
            ...styles.btnD,
            marginVertical: 5,
          }}
          textStyle={{ color: "white" }}
        />
      </View>
    );
  };

  const ConfirmCardPayment = () => {
    return (
      <View style={styles.confirmCard}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 17,
            marginBottom: 10,
          }}
        >
          Pay $620.00
        </Text>
        <Text
          style={{
            textAlign: "center",
            // fontSize: 17,
            marginBottom: 20,
          }}
        >
          $620.00 will be deducted from 022334555**** card to pay for your order
        </Text>
        <AppButton
          text="YES, CONFIRM ORDER"
          onClick={conFirmCardPay}
          style={{
            ...styles.btnD,
            backgroundColor: "white",
            borderColor: Colors.primary,
            borderWidth: 1,
            marginVertical: 5,
          }}
          textStyle={{
            color: Colors.primary,
            fontWeight: "bold",
          }}
        />
        <AppButton
          text="NO, CANCEL"
          onClick={() => setShowModal(false)}
          style={{
            ...styles.btnD,
            marginVertical: 5,
          }}
          textStyle={{ color: "white" }}
        />
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Modal transparent visible={showModal}>
        <View style={styles.modal}>
          <ConfirmCardPayment />
        </View>
      </Modal>
      <Modal transparent visible={showPaySuccess}>
        <View style={styles.modal}>
          <PaymentSuccessful />
        </View>
      </Modal>
      <View style={styles.card}>
        <View style={styles.flex}>
          <Text style={[styles.txt]}>Shipping</Text>
          <Text style={[styles.txt]}>$20.00</Text>
        </View>
        <View style={styles.flex}>
          <Text style={[styles.txt]}>Items Rate</Text>
          <Text style={[styles.txt]}>$600.00</Text>
        </View>
        <View style={styles.flex}>
          <Text style={[styles.txt, { fontWeight: "bold" }]}>Total</Text>
          <Text style={[styles.txt, { fontWeight: "bold" }]}>$620.00</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.code}>COUPON CODE</Text>
        <View>
          <Text>Enter code</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={{ alignItems: "center" }}>
          <AppButton
            text="APPLY COUPON"
            style={styles.btn}
            textStyle={{ color: Colors.primary, fontWeight: "bold" }}
          />
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.code}>PAYMENT METHOD</Text>
        <View style={styles.radio}>
          <RadioButton
            status={method === "card" ? "checked" : "unchecked"}
            color={Colors.primary}
            onPress={() => setMethod("card")}
            uncheckedColor={Colors.gray}
          />
          <Text>Debit Card</Text>
        </View>
        <View style={styles.radio}>
          <RadioButton
            status={method === "flutter" ? "checked" : "unchecked"}
            color={Colors.primary}
            uncheckedColor={Colors.gray}
            onPress={() => setMethod("flutter")}
          />
          <Text>Flutterwave</Text>
        </View>
        <View style={styles.radio}>
          <RadioButton
            status={method === "delivery" ? "checked" : "unchecked"}
            color={Colors.primary}
            uncheckedColor={Colors.gray}
            onPress={() => setMethod("delivery")}
          />
          <Text>Pay on Delivery</Text>
        </View>
      </View>
      <AppButton
        text="NEXT"
        style={styles.btnD}
        textStyle={{ color: "white" }}
        onClick={nextAction}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    // elevation: 2,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  txt: {
    fontSize: 15,
    minWidth: 80,
  },
  code: {
    fontSize: 17,
    marginBottom: 10,
    color: Colors.gray,
  },
  input: {
    width: "100%",
    borderWidth: 0.3,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 15,
    marginTop: 5,
  },
  btn: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.primary,
    width: "50%",
    paddingVertical: 5,
    marginVertical: 20,
  },
  radio: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnD: {
    borderRadius: 5,
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    marginVertical: 20,
    width: "100%",
  },
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0, 0.2)",
  },
  confirmCard: {
    backgroundColor: "white",
    height: "35%",
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
export default Payment;
