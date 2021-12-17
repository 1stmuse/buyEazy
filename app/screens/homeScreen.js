/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AppInput from "../components/common/AppInput";

import Screen from "../components/common/Screen";
import Colors from "../Colors";
import Category from "../components/Category";
import ProductCard from "../components/common/ProductCard";
import Swipers from "../components/homepage/Swiper";
import { getAllCategory } from "../api/category";
import { getProducts } from "../api/products";

import { Products, Cats } from "../data";
import SearchHeader from "../components/common/SearchHeader";

const HomeScreen = ({ navigation }) => {
  const [cat, setCat] = useState([]);
  const [products, setProducts] = useState([]);
  const getCat = async () => {
    const { data, ok } = await getAllCategory();
    // console.log(data);
    if (ok) {
      setCat(data.data.slice(0, 4));
    }
  };

  const getProduct = async () => {
    const { data, ok } = await getProducts();
    // console.log(data.data.slice(0, 2));
    if (ok) {
      setProducts(data.data.slice(0, 10));
    }
  };

  useEffect(() => {
    getCat();
    getProduct();
  }, []);

  return (
    <Screen style={{ paddingTop: 20, flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.main}>
          <View style={{ paddingHorizontal: 20 }}>
            <SearchHeader placeholder="Search for Products" />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20 }}>Top Categories</Text>
              <TouchableOpacity>
                <Text style={{ color: Colors.primary, fontWeight: "bold" }}>
                  VIEW MORE
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.cat}
            >
              {cat.map((cat) => (
                <View key={cat.id} style={{ flex: 1 }}>
                  <Category data={cat} top />
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={{ height: 200, marginBottom: 10 }}>
            <Swipers />
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20 }}>Recommended</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("all_products")}
              >
                <Text style={{ color: Colors.primary, fontWeight: "bold" }}>
                  VIEW MORE
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.products}>
            {products.map((ob) => (
              <View key={ob._id} style={styles.product}>
                <ProductCard data={ob} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 10,
    backgroundColor: "white",
  },
  cat: {
    flex: 1,
    marginVertical: 10,
  },
  products: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  product: {
    width: "45%",
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 0.3,
    borderColor: "#e4e4e4",
    marginBottom: 15,
    elevation: 0.5,
  },
});
export default HomeScreen;
