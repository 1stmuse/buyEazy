import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

import Screen from "../components/common/Screen";

const Account = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text>account more </Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Account;
