import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback as Touchable,
  Text,
} from "react-native";
import Colors from "../../Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { LOGOUT_ACTION } from "../../redux/actions";

const Settings = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const navigate = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
      <Touchable>
        <View style={styles.flex}>
          <Text>Change Password</Text>
          <View>
            <FontAwesome5 name="angle-right" size={24} color={Colors.Dgray} />
          </View>
        </View>
      </Touchable>
      <Touchable>
        <View style={[styles.flex]}>
          <Text>Change Language</Text>
          <View>
            <FontAwesome5 name="angle-right" size={24} color={Colors.Dgray} />
          </View>
        </View>
      </Touchable>
      <Touchable>
        <View style={styles.flex}>
          <Text>Privacy Policy</Text>
          <View>
            <FontAwesome5 name="angle-right" size={24} color={Colors.Dgray} />
          </View>
        </View>
      </Touchable>
      <Touchable>
        <View style={styles.flex}>
          <Text>Terms & Conditions</Text>
          <View>
            <FontAwesome5 name="angle-right" size={24} color={Colors.Dgray} />
          </View>
        </View>
      </Touchable>
      <Touchable onPress={() => dispatch({ type: LOGOUT_ACTION })}>
        <View style={styles.flex}>
          <Text>Logout</Text>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  flex: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 17,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
  },
  others: {
    backgroundColor: Colors.lBlue,
    borderBottomWidth: 0,
  },
});
export default Settings;
