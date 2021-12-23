import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import AppButton from "../../components/common/AppButton";
// import Screen from "../../components/Screen";
import Colors from "../../Colors";
import { getUser } from "../../api/api";
import { useSelector, useDispatch } from "react-redux";
import { GET_USER_INFO } from "../../redux/actions";

const Account = ({ navigation, route }) => {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [img, setImg] = React.useState(
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );

  const getUserInfo = async () => {
    const { ok, data } = await getUser();
    if (!ok) {
      return;
    }
    dispatch({ type: GET_USER_INFO, payload: { data: data.data } });
  };

  React.useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.pInfo}>
        <View style={styles.img}>
          <Image
            source={{ uri: img }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View>
          <Text styles={{ textAlign: "center" }}>{user?.data?.fullname}</Text>
          <Text styles={{ textAlign: "center" }}>{user?.data?.email}</Text>
        </View>
      </View>
      <View style={styles.pEdit}>
        <AppButton
          text="Edit Profile"
          onClick={() => navigation.navigate("edit_profile")}
          style={{
            backgroundColor: Colors.primary,
            width: "45%",
            borderRadius: 15,
            height: 55,
          }}
          textStyle={{
            color: Colors.white,
          }}
        />
        <AppButton
          text="Settings"
          onClick={() => navigation.navigate("settings")}
          style={{
            borderWidth: 0.5,
            width: "45%",
            borderRadius: 15,
            height: 55,
          }}
          textStyle={{
            color: Colors.Dgray,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  pInfo: {
    flex: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
    marginBottom: 20,
  },
  pEdit: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default Account;
