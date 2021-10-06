/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
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

import { Products, Cats } from "../data";
import SearchHeader from "../components/common/SearchHeader";

const HomeScreen = ({ navigation }) => {
  const [a, b, c, d] = Cats;
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
            <View style={styles.cat}>
              <Category data={a} top />
              <Category data={b} top />
              <Category data={c} top />
              <Category data={d} top />
            </View>
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
            {Products.map((ob) => (
              <View key={ob.id} style={styles.product}>
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
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
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
