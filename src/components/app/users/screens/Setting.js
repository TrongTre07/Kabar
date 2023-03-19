import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';

const Setting = () => {
  return (
    <View style={styles.container}>
      {/* BackArrow and Setting */}
      <View style={styles.topContainer}>
        <Image source={require('../../../../media/images/BackArrow.png')} />
        <Text style={styles.setting}>Setting</Text>
        <View />
      </View>
      <View style={styles.innerContainer}>
        {/* Notification */}
        <View style={styles.notificationContainer}>
          <View style={styles.buttonLogout}>
            <Image source={require('../../../../media/images/Bell.png')} />
            <Text style={styles.logout}>Notification</Text>
          </View>
          <Image source={require('../../../../media/images/HeadArrow.png')} />
        </View>

        {/* Security */}
        <View style={styles.notificationContainer}>
          <View style={styles.buttonLogout}>
            <Image source={require('../../../../media/images/IconLock.png')} />
            <Text style={styles.logout}>Security</Text>
          </View>
          <Image source={require('../../../../media/images/HeadArrow.png')} />
        </View>

        {/* Help */}

        <View style={styles.notificationContainer}>
          <View style={styles.buttonLogout}>
            <Image source={require('../../../../media/images/IconHelp.png')} />
            <Text style={styles.logout}>Help</Text>
          </View>
          <Image source={require('../../../../media/images/HeadArrow.png')} />
        </View>

        {/* DarkMode */}
        <View style={styles.notificationContainer}>
          <View style={styles.buttonLogout}>
            <Image source={require('../../../../media/images/IconMoon.png')} />
            <Text style={styles.logout}>Dark Mode</Text>
          </View>
          <Image source={require('../../../../media/images/HeadArrow.png')} />
        </View>

        {/* LogOut */}
        <View>
          <Pressable style={styles.buttonLogout}>
            <Image source={require('../../../../media/images/IconDoor.png')} />
            <Text style={styles.logout}>Logout</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  setting: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color:'black'
  },
  notificationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logout: {
    marginLeft: 8,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color:'black'
  },
  buttonLogout: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  innerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '60%',
    marginTop: 20,
  },
  container: {
    paddingTop: 34,
    paddingHorizontal: 28,
  },
});
