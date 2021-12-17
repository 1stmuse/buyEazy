import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../Colors";
import { AntDesign } from "@expo/vector-icons";

const ProductCard = ({ data, style, width }) => {
  const navigation = useNavigation();
  const { name, price, percentOff, images } = data;
  return (
    <Pressable
      onPress={() => navigation.navigate("product_detail", { data })}
      style={[styles.container, { ...style, width }]}
    >
      <View style={styles.img}>
        <Image
          resizeMode="center"
          source={{ uri: images[0] }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View
        style={{
          backgroundColor: "white",
          padding: 5,
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 18 }}>{name.slice(0, 20)}...</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 18 }}>${price}</Text>
          <AntDesign name="hearto" size={20} color={Colors.primary} />
        </View>
      </View>
      <Text style={styles.abTxt}>-10%</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    width: "100%",
    flexGrow: 1,
    height: 250,
  },
  img: {
    width: "100%",
    height: "70%",
    backgroundColor: "#e4e4e4",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  abTxt: {
    fontSize: 15,
    position: "absolute",
    backgroundColor: "orange",
    color: Colors.white,
    paddingVertical: 5,
    paddingHorizontal: 10,
    right: 0,
  },
});
export default ProductCard;
