import {
  View,
  Text,
  StyleSheet,
  Pressable,
  useWindowDimensions,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import Colors from "../Colors";
import AppButton from "../components/common/AppButton";
import { useNavigation } from "@react-navigation/native";
import { getAddress } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { GET_ADDRESS } from "../redux/actions";

const BillingAdd = ({ next }) => {
  const { address } = useSelector((state) => state);
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const { width, height } = useWindowDimensions();

  const getAddresses = async () => {
    const { data, ok } = await getAddress();

    if (ok) dispatch({ type: GET_ADDRESS, payload: { data: data?.data } });

    // console.log(data);
  };

  useEffect(() => {
    getAddresses();
  }, []);

  return (
    <View style={styles}>
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
          <Pressable
            onPress={() => navigation.navigate("address", { type: "Add" })}
          >
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
