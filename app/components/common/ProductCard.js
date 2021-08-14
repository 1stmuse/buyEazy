import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Colors from "../../Colors";
import { AntDesign } from "@expo/vector-icons"

const ProductCard = ({ data }) => {
  const { image, name, price, id, percentOff } = data;
  return (
    <View style={styles.container} key={id} >
      <View style={styles.img} > 
        <Image resizeMode="center" source={image} style={{ width: "100%", height: "100%" }} />
      </View>
      <View style={{padding:5, justifyContent:"center", flex:1}}>
        <Text style={{fontSize:18}}>{name}</Text>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <Text style={{fontSize:18}}>${price}.00</Text>
          <AntDesign name="hearto" size={20} color={Colors.primary} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    width: "100%",
    flexGrow:1,
    height: 250
  },
  img:{
      width:"100%",
      height:"70%",
      backgroundColor:"#e4e4e4",
      padding:5,
      justifyContent:"center",
      alignItems:"center",
  }
});
export default ProductCard;
