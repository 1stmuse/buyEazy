import React, {useRef, useState} from "react"
import { Text,  View, useWindowDimensions, Animated , StyleSheet, FlatList, TouchableOpacity} from "react-native";
import Slide from "./BoardSlide"
import {Slides} from "./data"
import Dots from "./Dots";
import NextButton from "./NextButton";
import AuthButtons from "./AuthButtons";




const onBoard = () => {
    const scrollX = useRef(new Animated.Value(0)).current
    const {width} = useWindowDimensions()
    const slideRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    // const viewableItemsChanged = useRef(({viewableItems}) =>{
    //     setCurrentIndex(viewableItems[0].index)
    // }).current

    const scrollTo = () => {
        if(currentIndex < Slides.length - 1){
            slideRef.current.scrollToIndex({index: currentIndex + 1})
        }
    }

    const onViewableItemsChanged = React.useRef(({ viewableItems }) => {
        const newIndex = viewableItems[0].index;
        setCurrentIndex(newIndex);
      }).current;
    

    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current

    return (
        <View style={[styles.boarding_container, {width}]}>
            {currentIndex < Slides.length - 1 ?
                <View style={styles.skipView}>
                    <TouchableOpacity>
                        <Text>SKIP</Text>
                    </TouchableOpacity>
                </View>
                : null
            }
            <View style={{flex:1}}>
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
            <View style={{flex:0.4,}}>
                <Dots slides={Slides} scrollX={scrollX}/>
                {currentIndex === Slides.length -1 ? (
                    <AuthButtons/>
                ) : (
                    <NextButton next={scrollTo}/>
                ) }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    boarding_container:{
        flex:1,
        // alignItems:'center'
        position:"relative"
    },
    skipView:{
        top: 20,
        width:"100%",
        alignItems: "flex-end",
        paddingHorizontal:15,
        position:"absolute"
    },
})

export default onBoard