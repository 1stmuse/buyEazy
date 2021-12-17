import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import AppButton from "../../components/common/AppButton";
import { Entypo, Ionicons } from "@expo/vector-icons";
import Colors from "../../Colors";
import * as ImagePicker from "expo-image-picker";
import AppInput from "../../components/common/AppInput";

const EditProfile = () => {
  const [img, setImg] = React.useState(
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );
  const [name, setName] = React.useState("Kyle Technologies");
  const [mail, setMail] = React.useState("theakinnagbe@gmail.com");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.cancelled) {
      setImg(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgView}>
        <Pressable onPress={pickImage}>
          <View style={styles.shad}>
            <View style={styles.img}>
              <Image
                source={{ uri: img }}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <View style={styles.edit}>
              <Entypo name="pencil" color={Colors.white} size={24} />
            </View>
          </View>
        </Pressable>
      </View>
      <View style={styles.inpView}>
        <View>
          <AppInput
            inputStyle={styles.inpt}
            LeftIcon={() => (
              <Ionicons size={25} name="md-person-circle-outline" />
            )}
            value={name}
            onChange={(text) => setName(text)}
          />
        </View>
        <View>
          <AppInput
            inputStyle={styles.inpt}
            LeftIcon={() => <Ionicons size={25} name="mail" />}
            value={mail}
            onChange={(text) => setMail(text)}
          />
        </View>
        <View style={styles.btn}>
          <AppButton
            text="UPDATE"
            style={{
              backgroundColor: Colors.secondary,
              width: "100%",
              paddingVertical: 27,
            }}
            textStyle={{
              color: Colors.white,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
  imgView: {
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
    position: "relative",
  },
  shad: {
    width: 200,
    height: 200,
    borderRadius: 100,
    // overflow: "hidden",
    marginBottom: 20,
    position: "relative",
  },
  inpView: {
    flex: 1.5,
  },
  btn: {
    marginTop: "10%",
  },
  edit: {
    position: "absolute",
    backgroundColor: Colors.primary,
    height: 60,
    width: 60,
    borderWidth: 7,
    borderColor: Colors.white,
    borderRadius: 30,
    right: 10,
    bottom: 5,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 20,
  },
  inpt: {
    marginBottom: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    borderWidth: 0.3,
    height: 60,
    paddingLeft: 10,
  },
});
export default EditProfile;
