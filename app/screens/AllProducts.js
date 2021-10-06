import React from "react";
import {
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  Pressable,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";
import Colors from "../Colors";
import { Products } from "../data";
import ProductCard from "../components/common/ProductCard";

const AllProducts = ({ navigation }) => {
  const { height, width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.center,
          { marginTop: height * 0.05, paddingHorizontal: 10, marginBottom: 10 },
        ]}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={30} color="black" />
        </Pressable>
        <Text style={{ fontSize: 20 }}>Recommended</Text>
        <Pressable>
          <EvilIcons name="search" size={30} color="black" />
        </Pressable>
      </View>
      <View style={styles.products}>
        <FlatList
          data={Products}
          renderItem={({ item }) => (
            <ProductCard data={item} style={styles.prod} width={width * 0.4} />
          )}
          keyExtractor={(data) => data.id}
          numColumns={2}
          contentContainerStyle={{ paddingVertical: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  center: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  products: {
    flex: 1,
  },
  prod: {
    width: "40%",
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 10,
    borderWidth: 0.3,
    borderColor: "#e4e4e4",
    marginBottom: 15,
    elevation: 0.5,
  },
});
export default AllProducts;
