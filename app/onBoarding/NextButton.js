import * as React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import Colors from "../Colors";

const NextButton = ({next}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.5} onPress={next} style={styles.button}>
                <AntDesign name="arrowright" size={24} color="white"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"flex-end",
        paddingRight:20
    },
    button:{
        backgroundColor: Colors.primary,
        padding:10,
        width:90,
        alignItems:"center",
        borderRadius:6
    }
})

export default NextButton