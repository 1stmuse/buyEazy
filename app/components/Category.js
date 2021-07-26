import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Colors from "../Colors";

const Category = ({text, Img, style, height, width}) => {

    return (
        <View style={[styles.container, style]}  >
            <Img height={height} width={width} />
            <Text style={{marginTop:10}} >{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation:0.5

    }
})

export default Category