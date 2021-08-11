import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import Colors from '../../Colors';
import { swiperData } from "../../data"

const Swipers =() =>{

  return (
        <View style={styles.container} >
            <Swiper autoplay={true} autoplayTimeout={3.5} >
            {swiperData.map((ob) => (
                <View key={ob.id} style={[styles.slider, {backgroundColor: ob.color}]}>
                    <Image source={ob.img} style={{width:100, height:100}} />
                    <View style={{marginLeft:20}}>
                        <Text style={styles.title}>{ob.Title}</Text>
                        <Text style={styles.text} >{ob.text}</Text>
                    </View>
                </View>
            ))}
            </Swiper>
        </View>
   )

}


const styles = StyleSheet.create({
   container:{
      width:"100%",
      flex: 1,
      height: "100%",
   },
   slider:{
       flexDirection:"row",
       alignItems:"center",
       justifyContent: "center",
       height:"100%",
       paddingHorizontal:50,
   },
   title: {
       color:Colors.white,
       fontWeight: "bold",
       fontSize:25,
   },
   text:{
       color: Colors.white,
       fontSize:13,
       marginTop:10
   }
})
export default Swipers