import React, {useRef, useState} from "react"
import { Text,  View, useWindowDimensions, Animated , StyleSheet, FlatList} from "react-native";
import Slide from "./BoardSlide"
import {Slides} from "./data"
import Dots from "./Dots";




const onBoard = () => {
    const scrollX = useRef(new Animated.Value(0)).current
    const {width} = useWindowDimensions()
    const slideRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    // const viewableItemsChanged = useRef(({viewableItems}) =>{
    //     setCurrentIndex(viewableItems[0].index)
    // }).current

    const onViewableItemsChanged = React.useRef(({ viewableItems }) => {
        const newIndex = viewableItems[0].index;
        setCurrentIndex(newIndex);
      }).current;
    

    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current

    return (
        <View style={[styles.boarding_container, {width}]}>
            <View style={{flex:3}}>
                <FlatList
                // style={{flex:1}}
                    pagingEnabled
                    scrollEventThrottle={32}
                    horizontal
                    bounces={false}
                    data={Slides}
                    keyExtractor={(ob) => ob.id }
                    renderItem={({item, index}) => <Slide index={index} data={item} />}
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                    [{nativeEvent:{contentOffset:{x:scrollX}}}],
                    {useNativeDriver:false}
                    )}
                    onViewableItemsChanged={onViewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slideRef}
                />
            </View>
            {/* <View style={{flex:0.3, borderWidth:1}}> */}
                <Dots slides={Slides} scrollX={scrollX}/>
            {/* </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    boarding_container:{
        flex:1,
        // alignItems:'center'
    }
})

export default onBoard