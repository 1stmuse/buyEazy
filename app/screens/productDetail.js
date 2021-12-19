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
  Modal,
} from "react-native";

import Screen from "../components/common/Screen";
import AppButton from "../components/common/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../Colors";
import AddToCartSuccess from "../components/AddToCartSuccess";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../redux/actions";

const ProductDetails = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { height } = useWindowDimensions();
  const [showModal, setShowModal] = React.useState(false);
  const { data } = route.params;

  const goToCart = () => {
    setShowModal(false);
    navigation.navigate("cart");
  };

  const continueShopping = () => {
    setShowModal(false);
  };

  const addToCart = () => {
    const cartData = {
      image: data.images[0],
      id: data._id,
      price: data.price,
      name: data.name,
      quantity: 1,
    };

    dispatch({ type: ADD_TO_CART, payload: { item: cartData } });
    setShowModal(true);
    // console.log(cartData);
  };

  return (
    <View style={styles.main}>
      <Modal visible={showModal} transparent animationType="fade">
        <View style={styles.modal}>
          <AddToCartSuccess
            goToCart={goToCart}
            continueShopping={continueShopping}
          />
        </View>
      </Modal>
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
            source={{ uri: data.images[0] }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View style={styles.details}>
          <View style={styles.center}>
            <Text style={styles.bigTxt}>{data.name}</Text>
            <View>
              <MaterialCommunityIcons
                name="heart-outline"
                color={Colors.primary}
                size={30}
              />
            </View>
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
              {Number(data.price) + 100}
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
              {data.description.split(".").map((text, ind) => (
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
              onClick={addToCart}
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
    flex: 1,
    marginRight: 10,
  },
  line: {
    width: "100%",
    height: 0.13,
    backgroundColor: Colors.gray,
    marginVertical: 20,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0, 0.7)",
    paddingHorizontal: 20,
  },
});
export default ProductDetails;
