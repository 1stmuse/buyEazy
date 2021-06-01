/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import RadioButtonRN from 'radio-buttons-react-native';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback as NoFeed,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';

const height = Dimensions.get('window').height;

const PlaceOrder = () => {
  const [payType, setPayType] = useState('Cash');
  const [sitNo, setSitNo] = useState('0');
  const paymentType = [{label: 'Cash'}, {label: 'Card'}];
  const inputRef = useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.actionSheetContent}>
        <ScrollView>
          <View style={{width: '100%', alignItems: 'center', marginBottom: 10}}>
            <Text style={{fontSize: 22}}>Checkout</Text>
          </View>
          <View>
            <Text style={{fontSize: 20}}>how would you like pay ?</Text>
            <RadioButtonRN
              style={styles.radio}
              initial={1}
              data={paymentType}
              textStyle={{marginLeft: 20, fontSize: 18}}
              box={false}
              animationTypes={['pulse']}
              selectedBtn={(e) => setPayType(e)}
            />
          </View>
          <View style={styles.sitInput}>
            <NoFeed onPress={() => inputRef.current?.focus()}>
              <Text style={{fontSize: 18, marginRight: 15}}>Sit Number</Text>
            </NoFeed>
            <TextInput
              ref={inputRef}
              value={sitNo}
              onChangeText={(text) => setSitNo(text)}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
          <View style={styles.price}>
            <Text style={styles.priceText}>Price</Text>
            <Text style={{fontSize: 20, width: 10}}>-</Text>
            <Text style={styles.priceText}> $134.56 </Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.orderButtonContainer}>
        <TouchableOpacity activeOpacity={0.7} style={styles.pay}>
          <Text style={[{color: 'white', fontWeight: 'bold', fontSize: 20}]}>
            checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: height * 0.5,
    position: 'relative',
    paddingTop: 35,
    paddingHorizontal: 25,
  },
  actionSheetContent: {
    flex: 1,
  },
  orderButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 5,
    width: '100%',
  },
  radio: {
    // flexDirection:'row',
    justifyContent: 'space-between',
    width: '50%',
    marginLeft: 15,
  },
  pay: {
    backgroundColor: 'tomato',
    width: '80%',
    padding: 8,
    alignItems: 'center',
  },
  payType: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 50,
    padding: 10,
  },
  sitInput: {
    marginTop: 10,
    padding: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 50,
    height: 40,
    fontSize: 18,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  priceText: {
    marginRight: 10,
    fontSize: 20,
  },
});
export default PlaceOrder;
