/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, createRef} from 'react';
import ActionSheet from 'react-native-actions-sheet';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Screen from '../components/Screen';
import PlaceOrder from '../components/PlaceOrder';
import {menus} from '../data';

const actionsSheetRef = createRef();
const scrollViewRef = createRef();

const FoodDetails = ({route, navigation}) => {
  const {id} = route.params;
  const [food, setFood] = useState({});

  const showFood = (foodID) => {
    const foodMain = menus.find((item) => item.id === foodID);

    setFood(foodMain);
  };

  useEffect(() => {
    showFood(id);
  });
  return (
    <Screen>
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.container}>
            <View>
              <Text style={styles.text}> {food.name} </Text>
              <View style={{height: 200}}>
                <Image
                  source={food.img}
                  resizeMode="stretch"
                  style={{width: '100%', height: '100%'}}
                />
              </View>
            </View>
            <View style={styles.actions}>
              <View style={styles.contentAction}>
                <Text style={styles.contentActionText}>Content</Text>
                <View style={styles.contentWrapper}>
                  <View style={styles.content}>
                    <Text style={[styles.actionText, {textAlign: 'left'}]}>
                      Shawama
                    </Text>
                    <Text style={styles.actionText}>1</Text>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={styles.addContent}>
                      <Text
                        style={[
                          styles.actionText,
                          {
                            textAlign: 'center',
                            minWidth: 50,
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 22,
                          },
                        ]}>
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.content}>
                    <Text style={[styles.actionText, {textAlign: 'left'}]}>
                      Egg
                    </Text>
                    <Text style={styles.actionText}>1</Text>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={styles.addContent}>
                      <Text
                        style={[
                          styles.actionText,
                          {
                            textAlign: 'center',
                            minWidth: 50,
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 22,
                          },
                        ]}>
                        +{' '}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.content}>
                    <Text style={[styles.actionText, {textAlign: 'left'}]}>
                      Egg
                    </Text>
                    <Text style={styles.actionText}>1</Text>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={styles.addContent}>
                      <Text
                        style={[
                          styles.actionText,
                          {
                            textAlign: 'center',
                            minWidth: 50,
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 22,
                          },
                        ]}>
                        +{' '}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.content}>
                    <Text style={[styles.actionText, {textAlign: 'left'}]}>
                      Egg
                    </Text>
                    <Text style={styles.actionText}>1</Text>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={styles.addContent}>
                      <Text
                        style={[
                          styles.actionText,
                          {
                            textAlign: 'center',
                            minWidth: 50,
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 22,
                          },
                        ]}>
                        +{' '}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.orderButtonContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.orderButton}
          onPress={() => actionsSheetRef.current?.setModalVisible()}>
          <Text style={[{color: 'white', fontWeight: 'bold', fontSize: 20}]}>
            Place order
          </Text>
        </TouchableOpacity>
      </View>
      <ActionSheet
        ref={actionsSheetRef}
        headerAlwaysVisible={true}
        bounceOnOpen={true}
        indicatorColor="tomato"
        gestureEnabled={true}>
        <View>
          <ScrollView
            ref={scrollViewRef}
            nestedScrollEnabled={true}
            onScrollEndDrag={() =>
              actionsSheetRef.current?.handleChildScrollEnd()
            }
            onScrollAnimationEnd={() =>
              actionsSheetRef.current?.handleChildScrollEnd()
            }
            onMomentumScrollEnd={() =>
              actionsSheetRef.current?.handleChildScrollEnd()
            }>
            <PlaceOrder />
          </ScrollView>
        </View>
      </ActionSheet>
    </Screen>
  );
};

const styles = StyleSheet.create({
  actions: {
    padding: 15,
    flex: 1,
  },
  addContent: {
    backgroundColor: 'tomato',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  contentAction: {},
  contentActionText: {
    alignSelf: 'center',
    fontSize: 25,
  },
  actionText: {
    minWidth: 80,
    textAlign: 'center',
    fontSize: 20,
  },
  contentWrapper: {
    marginVertical: 20,
  },
  container: {
    flex: 1,
  },
  orderButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
    width: '100%',
  },
  orderButton: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: 'tomato',
    padding: 12,
    borderRadius: 25,
  },
  text: {
    color: 'blue',
    alignSelf: 'center',
    fontSize: 20,
  },
});
export default FoodDetails;
