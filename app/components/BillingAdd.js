import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  useWindowDimensions,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import Colors from "../Colors";
import AppButton from "../components/common/AppButton";
import { AntDesign } from "@expo/vector-icons";
import AppInput from "./common/AppInput";
import { getAddress } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { GET_ADDRESS } from "../redux/actions";

const BillingAdd = ({ next }) => {
  const { address } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { width, height } = useWindowDimensions();
  const [showForm, setShowForm] = useState(false);

  const getAddresses = async () => {
    const { data, ok } = await getAddress();

    if (ok) dispatch({ type: GET_ADDRESS, payload: { data: data?.data } });

    // console.log(data);
  };

  useEffect(() => {
    getAddresses();
  }, []);

  console.log(address);

  const AddressForm = () => {
    return (
      <View
        style={{
          minHeight: height * 0.3,
          // marginHorizontal: width * 0.05,
          justifyContent: "center",
          backgroundColor: "white",
          borderRadius: 15,
          width: width * 0.9,
          paddingHorizontal: 10,
          paddingVertical: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.addL}>Add new delivery method</Text>
          <Pressable onPress={() => setShowForm(false)}>
            <AntDesign name="close" color={Colors.primary} size={24} />
          </Pressable>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderRadius: 7,
            marginTop: 30,
          }}
        >
          <TextInput
            style={{ width: "100%", paddingHorizontal: 20, paddingVertical: 5 }}
            multiline
            placeholder="address name"
          />
        </View>
        <View>
          <AppButton
            text="ADD"
            // onClick={() => next(1)}
            style={styles.btn}
            textStyle={{ color: "white" }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles}>
      <Modal
        transparent
        visible={showForm}
        style={{ flex: 1, backgroundColor: "red" }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <AddressForm />
        </View>
      </Modal>
      <View style={styles.card}>
        <View style={styles.addMain}>
          <Text style={styles.addL}>DELIVERY METHOD</Text>
          <View style={{ flexDirection: "row" }}>
            <View />
            <View style={{ flexGrow: 1 }}>
              <View style={styles.tpFlex}>
                <Text style={styles.hme}>Home Address</Text>
                <Pressable>
                  <Text style={styles.edit}>EDIT ADRESS</Text>
                </Pressable>
              </View>
              <Text style={styles.add}>1, Adeola Odeku street, VI, Lagos</Text>
              <Text style={styles.add}>+23480564382</Text>
            </View>
          </View>
        </View>
        <View style={styles.newAdd}>
          <Pressable onPress={() => setShowForm(true)}>
            <Text style={styles.newTxt}>ADD NEW ADDRESS</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.delvDate}>
        <Text style={styles.addL}>DELIVERY DATE</Text>
        <Text style={styles.add}>Thursday, 20th November 2020</Text>
      </View>
      <AppButton
        text="NEXT"
        onClick={() => next(1)}
        style={styles.btn}
        textStyle={{ color: "white" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
  },
  card: {
    // elevation: 2,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingBottom: 20,
    paddingTop: 5,
  },
  delvDate: {
    // elevation: 2,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 20,
  },
  tpFlex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  addMain: {
    borderBottomWidth: 0.4,
    paddingBottom: 20,
    marginBottom: 20,
  },
  addL: {
    fontSize: 18,
    color: Colors.gray,
    marginBottom: 10,
  },
  hme: {
    fontSize: 16,
  },
  edit: {
    fontSize: 16,
    color: Colors.primary,
  },
  add: {
    fontSize: 15,
  },
  newAdd: {
    justifyContent: "center",
    alignItems: "center",
  },
  newTxt: {
    color: Colors.primary,
  },
  btn: {
    marginTop: 30,
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    borderRadius: 5,
  },
});

export default BillingAdd;
