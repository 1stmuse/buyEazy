import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Colors from '../../Colors'
import ProfileInputs from '../../commons/profile/Input'
import AppButton from '../../components/commons/AppButton'

const ChangePassword =({navigation, route}) =>{
    
    // useHideTabBar(navigation)
    

  return (
    <View style={styles.container} >
      <View>
          <ProfileInputs 
            name="lock-closed" 
            placeholder="Current Password" 
          />
      </View>
      <View>
          <ProfileInputs 
            name="lock-closed" 
            placeholder="New Password" 
          />
      </View>
      <View>
          <ProfileInputs 
            name="lock-closed" 
            placeholder="Confirm Password" 
          />
      </View>
      <View style={styles.btn}>
          <AppButton 
            text="UPDATE"
            style={{
                backgroundColor: Colors.secondary,
                width: "100%"
            }}
            textStyle={{
                color: Colors.white
            }}
          />
      </View>
    </View>
   )

}


const styles = StyleSheet.create({
   container:{
      flex: 1,
      backgroundColor: Colors.white,
      paddingHorizontal: 20,
      paddingTop: "20%"
   },
   btn: {
       marginTop: "20%"
   }
})
export default ChangePassword