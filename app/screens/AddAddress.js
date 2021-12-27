import React from "react";
import { View, StyleSheet, Text, Pressable, TextInput } from "react-native";
import AppButton from "../components/common/AppButton";
import { addAddress } from "../api/api";
import Colors from "../Colors";

const AddAddress = ({ navigation }) => {
  const [addName, setAddName] = React.useState("");

  const add_address = async () => {
    console.log("clicked");
    const { ok } = await addAddress({ name: addName });

    if (ok) {
      navigation.navigate("checkout");
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.addL}>Add new delivery method</Text>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderRadius: 7,
        }}
      >
        <TextInput
          style={{ width: "100%", paddingHorizontal: 20, paddingVertical: 5 }}
          multiline
          value={addName}
          onChangeText={(text) => setAddName(text)}
          placeholder="address name"
        />
      </View>
      <View>
        <AppButton
          text="ADD"
          onClick={add_address}
          style={styles.btn}
          textStyle={{ color: "white" }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  addL: {
    fontSize: 18,
    color: Colors.gray,
    marginBottom: 10,
  },
  btn: {
    marginTop: 30,
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    borderRadius: 5,
  },
});
export default AddAddress;
