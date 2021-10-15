import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import OrderItem from "./OrderItem";
import { Products } from "../data";

const PendingOrders = () => {
  const data = Products.slice(0, 4);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <OrderItem data={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingVertical: 20,
  },
});
export default PendingOrders;
