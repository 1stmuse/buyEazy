/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PickerItem from './PickerItem';

const AppPicker = ({
  icon,
  placeholder,
  menus,
  selectCat,
  selectedItem,
  ...otherProps
}) => {
  const [visible, setVisible] = useState(false);

  const onSelect = (key) => {
    setVisible(false);
    selectCat(key);
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setVisible(!visible)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons name={icon} size={20} style={styles.icon} />
          )}
          <Text style={styles.text}>
            {selectedItem ? selectedItem : placeholder}
          </Text>
          <MaterialCommunityIcons name="chevron-down" size={20} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={visible} animationType="slide">
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
          <View style={styles.closeBtn}>
            <Text style={{color: 'blue', fontSize: 22}}>Close</Text>
          </View>
        </TouchableWithoutFeedback>
        <FlatList
          data={menus}
          numColumns={3}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <PickerItem menu={item} onPress={onSelect} />}
        />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    padding: 15,
  },
  cat: {
    borderRadius: 15,
    backgroundColor: 'tomato',
    padding: 15,
    marginVertical: 15,
    marginHorizontal: 15,
  },
  closeBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    marginRight: 15,
  },
  text: {
    flex: 1,
    fontSize: 18,
    color: 'black',
  },
});
export default AppPicker;
