import React from 'react';
import { View, StyleSheet, Animated , useWindowDimensions} from 'react-native';
import Colors from "../Colors"

const Dots =({slides, scrollX}) =>{
    const {width} = useWindowDimensions()
  return (
    <View style={styles.container} >
      {slides.map((ob, i) => {
          const inputRange = [(i -1) * width, width * i, width * (i +1)]
          const animateWidth = scrollX.interpolate({
              inputRange,
              outputRange: [10, 20, 10],
              extrapolate: "clamp"
          })
          const color = scrollX.interpolate({
              inputRange,
              outputRange: ["grey", Colors.primary, "grey"],
              extrapolate: "clamp"
          })
          return(
            <Animated.View key={ob.id} style={[styles.dots, {width:animateWidth, backgroundColor:color}]}/>
          )
      })}
    </View>
   )

}


const styles = StyleSheet.create({
   container:{
      flexDirection:"row",
      alignItems:'center',
      justifyContent:"center",
      marginBottom:40
   },
   dots:{
       width:10,
       height:10,
       borderRadius:10/2,
       backgroundColor:"grey",
       marginLeft:10
   }
})
export default Dots