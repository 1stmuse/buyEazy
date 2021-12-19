import React, { useRef, useState } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  Animated,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Slide from "./BoardSlide";
import { Slides } from "./data";
import Dots from "./Dots";
import { useNavigation } from "@react-navigation/native";
import NextButton from "./NextButton";
import Colors from "../Colors";

const onBoard = () => {
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width } = useWindowDimensions();
  const slideRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollTo = () => {
    if (currentIndex < Slides.length - 1) {
      slideRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const onViewableItemsChanged = React.useRef(({ viewableItems }) => {
    const newIndex = viewableItems[0].index;
    setCurrentIndex(newIndex);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={[styles.boarding_container, { width }]}>
      {currentIndex < Slides.length - 1 ? (
        <View style={styles.skipView}>
          <Pressable onPress={() => navigation.navigate("auth")}>
            <Text>SKIP</Text>
          </Pressable>
        </View>
      ) : null}
      <View style={{ flex: 1 }}>
        <FlatList
          // style={{flex:1}}
          pagingEnabled
          scrollEventThrottle={32}
          horizontal
          bounces={false}
          data={Slides}
          keyExtractor={(ob) => ob.id}
          renderItem={({ item, index }) => <Slide index={index} data={item} />}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />
      </View>
      <View style={{ flex: 0.4 }}>
        <Dots slides={Slides} scrollX={scrollX} />
        {currentIndex === Slides.length - 1 ? (
          <View style={{ alignItems: "center" }}>
            <Pressable
              style={styles.start}
              onPress={() => navigation.navigate("auth")}
            >
              <Text style={{ color: Colors.primary }}>Get Started</Text>
            </Pressable>
          </View>
        ) : (
          <NextButton next={scrollTo} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boarding_container: {
    flex: 1,
    // alignItems:'center'
    position: "relative",
  },
  skipView: {
    top: 20,
    width: "100%",
    alignItems: "flex-end",
    paddingHorizontal: 15,
    position: "absolute",
  },
  start: {
    width: "80%",
    alignItems: "center",
    marginBottom: 10,
    paddingVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
});

export default onBoard;
