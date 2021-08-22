import React from "react";
import {View, Text, StyleSheet, Image, useWindowDimensions} from "react-native";
import Colors from "../Colors";

const Category = ({data, top}) => {
    const { width } = useWindowDimensions()
    if(top){
        return (
            <View style={[styles.container, {width: "23%", height:80}]}  >
                <Image source={{uri: data.img}} style={{height: 50, width: 70}} />
                <Text style={{marginTop:10, color: "black"}} >{data.name}</Text>
            </View>
        )
    }
    return (
        <View style={[styles.container, {width: (width - 40) * 0.47, height:(width - 40) * 0.47, }, styles.contN]}>
            <Image source={{uri: data.img}} style={{height: 50, width: "60%"}} />
            <Text style={{marginTop:10, color: "black"}} >{data.name}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        shadowColor: Colors.white,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation:0.5,
    },
    contN:{
        marginHorizontal: 8,
        marginVertical:14,
        borderRadius:5,
        borderWidth: 0.8,
        elevation: 0.3,
        borderColor: "rgba(0,0,0, 0.3)"
    }
})

export default Category