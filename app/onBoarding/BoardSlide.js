import React from "react";
import { View, Text, useWindowDimensions, StyleSheet, Image, } from "react-native";

const Slide = ({data}) => {
    const {width, height} = useWindowDimensions()
    return (
        <View style={[styles.slide_container, {width}]} > 
            <View style={{ justifyContent:'center', flex:1,}}>
                <View style={[styles.image_view, ]} >
                    <Image
                        source={data.image}
                        resizeMode="contain"
                        style={{width: width/2 + 50, height:height/4 + 20}}
                    />
                </View>
                <View style={styles.texts_view}> 
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.text}> {data.text} </Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    slide_container:{
        flex:1,
        paddingTop:20,
        // borderWidth:1
    },
    skipView:{
        alignItems: "flex-end",
        paddingHorizontal:15,
        marginBottom: 30
    },
    image_view:{
        // flex:0.9,
        // borderWidth:1,
        alignItems:'center',
        justifyContent:"center",
    },
    texts_view:{
        // flex: 0.4,
        alignItems:"center",
        width: "100%",
        marginTop:"10%"
    },
    title:{
        fontSize: 24,
        color: "black",
        fontWeight:"bold",
        opacity:0.7
    },
    text:{
        textAlign:'center',
        marginTop:10,
        fontSize:16,
        width:"70%"
    }
})

export default Slide