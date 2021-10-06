/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  useWindowDimensions,
  Image,
  ScrollView,
} from "react-native";

import Screen from "../components/common/Screen";
import AppButton from "../components/common/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../Colors";

const demoText =
  "The iphone 12 Por max is the latest producrs of Apple and it works with 5g giving you the power to browse completely fast wwithout having inter delapy. Check out ouy on the bext platforms where you can get it boss";

const ProductDetails = ({ route, navigation }) => {
  const { height } = useWindowDimensions();
  const { data } = route.params;
  return (
    <View style={styles.main}>
      <View
        style={[
          styles.center,
          { marginTop: height * 0.05, paddingHorizontal: 10, marginBottom: 10 },
        ]}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={30} color="black" />
        </Pressable>
        <Text style={{ fontSize: 20 }}>Details</Text>
        <Pressable onPress={() => navigation.navigate("cart")}>
          <MaterialCommunityIcons name="cart" size={30} color="black" />
        </Pressable>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <View style={[styles.imgView, { height: height * 0.43 }]}>
          <Image
            source={data.image}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View style={styles.details}>
          <View style={styles.center}>
            <Text style={styles.bigTxt}>{data.name}</Text>
            <MaterialCommunityIcons
              name="heart-outline"
              color={Colors.primary}
              size={30}
            />
          </View>
          <Text style={styles.bigTxt}>${data.price} </Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}
          >
            <Text
              style={{
                fontSize: 17,
                color: Colors.gray,
                textDecorationLine: "line-through",
                marginRight: 10,
              }}
            >
              ${`${data.price + 100}`}
            </Text>
            <Text
              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                backgroundColor: "orange",
                color: "white",
                borderRadius: 5,
              }}
            >
              -20%
            </Text>
          </View>
          <View style={styles.line} />
          <View>
            <Text
              style={[
                styles.bigTxt,
                {
                  textTransform: "uppercase",
                  color: Colors.gray,
                  marginBottom: 10,
                },
              ]}
            >
              Description
            </Text>
            <View>
              {demoText.split(".").map((text, ind) => (
                <Text
                  style={{
                    fontSize: 14,
                    marginBottom: 10,
                  }}
                  key={ind}
                >
                  {text}.
                </Text>
              ))}
            </View>
          </View>
          <View style={[styles.line, { height: 1 }]} />
          <View style={{ flexDirection: "row" }}>
            <AppButton
              text="ADD TO CART"
              style={{
                backgroundColor: Colors.primary,
                width: 200,
                paddingVertical: 10,
                borderRadius: 10,
              }}
              textStyle={{
                color: Colors.white,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    // padding: 15,
    flex: 1,
    backgroundColor: Colors.white,
  },
  center: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imgView: {
    marginVertical: 5,
  },
  details: {
    paddingHorizontal: 20,
  },
  bigTxt: {
    fontSize: 20,
  },
  line: {
    width: "100%",
    height: 0.13,
    backgroundColor: Colors.gray,
    marginVertical: 20,
  },
});
export default ProductDetails;
