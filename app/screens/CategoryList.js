import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Colors from "../Colors";
import { useSelector } from "react-redux";
import ProductCard from "../components/common/ProductCard";

const CategoryList = ({ route }) => {
  const { title } = route.params;
  const { product } = useSelector((state) => state);
  const filteredProducts = product.filter((ob) => ob.category === title);

  if (!filteredProducts.length) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>NO products to display</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredProducts}
        renderItem={({ item }) => <ProductCard data={item} />}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },
});
export default CategoryList;
