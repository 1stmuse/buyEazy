import * as React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import Colors from "../Colors";

const AuthButtons = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.5} style={styles.sign_in}>
                <Text style={{color: Colors.primary}} >SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.sign_up}>
                <Text style={{color: Colors.white}} >SIGN IN</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center"
    },
    sign_in:{
        width: "80%",
        alignItems:"center",
        marginBottom:10,
        paddingVertical:10,
        borderRadius:4,
        borderWidth:1,
        borderColor: Colors.primary
    },
    sign_up:{
        width:"80%",
        backgroundColor: Colors.primary,
        alignItems:"center",
        paddingVertical:10,
        borderRadius:4
    }
})

export default AuthButtons