import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Colors from "../Colors";
import PendingOrders from "../components/PendingOrders";

// import Screen from "../components/common/Screen";

const Order = () => {
  const [active, setActive] = React.useState(0);
  const activeBg = (index) => (index === active ? Colors.primary : Colors.gray);
  const activeHeight = (index) => (index === active ? 2 : 0);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txt}>Orders</Text>
      </View>
      <View style={styles.tabView}>
        <Pressable style={styles.tab} onPress={() => setActive(0)}>
          <Text style={[styles.tabTxt, { color: activeBg(0) }]}>Pending</Text>
          <View style={[styles.ln, { height: activeHeight(0) }]} />
        </Pressable>
        <Pressable style={styles.tab} onPress={() => setActive(1)}>
          <Text style={[styles.tabTxt, { color: activeBg(1) }]}>History</Text>
          <View style={[styles.ln, { height: activeHeight(1) }]} />
        </Pressable>
      </View>
      <View style={{ marginTop: 20, paddingHorizontal: 20, flex: 1 }}>
        {active === 0 ? <PendingOrders /> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderBottomColor: Colors.gray,
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
export default Order;
