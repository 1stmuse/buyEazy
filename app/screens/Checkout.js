import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Colors from "../Colors";
import BillingAdd from "../components/BillingAdd";
import Payment from "../components/Payment";

const Checkout = ({ navigation }) => {
  const [active, setActive] = React.useState(0);

  const activeBg = (index) => (index === active ? Colors.primary : Colors.gray);
  const activeHeight = (index) => (index === active ? 2 : 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          onPress={() => navigation.goBack()}
          name="arrowleft"
          size={24}
        />
        <Text style={styles.txt}>Checkout</Text>
      </View>
      <View style={styles.tabView}>
        <Pressable style={styles.tab} onPress={() => setActive(0)}>
          <Text style={[styles.tabTxt, { color: activeBg(0) }]}>
            Billing Address
          </Text>
          <View style={[styles.ln, { height: activeHeight(0) }]} />
        </Pressable>
        <Pressable style={styles.tab} onPress={() => setActive(1)}>
          <Text style={[styles.tabTxt, { color: activeBg(1) }]}>Payment</Text>
          <View style={[styles.ln, { height: activeHeight(1) }]} />
        </Pressable>
      </View>
      <View style={{ marginTop: 20, paddingHorizontal: 20, flex: 1 }}>
        {active === 0 ? <BillingAdd next={setActive} /> : <Payment />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ash,
  },
  header: {
    backgroundColor: Colors.white,
    height: 100,
    alignItems: "center",
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  txt: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 10,
  },
  tabView: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    justifyContent: "space-around",
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  tab: {
    width: "40%",
    alignItems: "center",
  },
  ln: {
    width: "30%",
    // height: 2,
    marginTop: 5,
    backgroundColor: Colors.primary,
  },
  tabTxt: {
    fontSize: 18,
  },
});
export default Checkout;
