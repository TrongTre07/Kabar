import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useContext, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NewsContext} from '../utilities/NewsContext';
import {UsersContext} from '../../users/utilities/UsersContext';

const Profile = props => {
  const {navigation} = props;

  const {login} = useContext(UsersContext);

  const {avatar} = useContext(UsersContext);

  const path = `'` + avatar + `'`;

  console.log('avatar: ', path);

  return (
    <View style={styles.container}>
      {/* Profile and setting icon */}
      <View style={styles.profileAndSetting}>
        <View />
        <Text style={styles.profile}>Profile</Text>
        <Image source={require('../../../../media/images/IconSetting.png')} />
      </View>

      {/* Image Info, Followers, Following, News */}
      <View style={styles.infoContainer}>
        {/* Image Info */}
        <Image
          style={styles.imageInfo}
          source={{uri: avatar}}
          // source={require('../../../../media/images/Makima.png')}
        />

        {/* Followers */}
        <View style={styles.followersContainer}>
          <Text style={styles.numberFollowers}>4M</Text>
          <Text style={styles.followers}>Followers</Text>
        </View>

        {/* Following */}
        <View style={styles.followersContainer}>
          <Text style={styles.numberFollowers}>4B</Text>
          <Text style={styles.followers}>Following</Text>
        </View>

        {/* News */}
        <View style={styles.followersContainer}>
          <Text style={styles.numberFollowers}>4444</Text>
          <Text style={styles.followers}>News</Text>
        </View>
      </View>

      {/* Name and Infomation */}
      <View style={styles.nameAndInfoContainer}>
        <Text style={styles.name}>Trong Dep Trai</Text>
        <Text style={styles.textInfo}>
          Trong dep trai là một người rất rất đẹp trai, đẹp trai không ai đẹp
          bằng luôn{' '}
        </Text>
      </View>

      {/* Button Edit, Website. News, Recent */}
      <View>
        {/* Button Edit and Website */}
        <View style={styles.buttonEditWebsiteContainer}>
          <Pressable
            onPress={() => navigation.navigate('EditProfile')}
            style={styles.buttonEditWebsite}>
            <Text style={styles.editProfile}>Edit Profile</Text>
          </Pressable>
          <Pressable style={styles.buttonEditWebsite}>
            <Text style={styles.editProfile}>Website</Text>
          </Pressable>
        </View>

        {/* News and Recent */}
        <View style={styles.textNewsRecentContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '30%',
            }}>
            <Text style={styles.textInfo}>News</Text>
            <Text style={styles.textInfo}>Recent</Text>
          </View>
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Pressable
          style={{
            height: 30,
            width: 30,
            backgroundColor: 'pink',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('CreateNews')}>
          <Image
            style={{transform: [{rotate: '45deg'}], backgroundColor: 'pink'}}
            source={require('../../../../media/images/IconX.png')}></Image>
        </Pressable>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  editProfile: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
  },
  buttonEditWebsite: {
    width: '43%',
    height: 50,
    backgroundColor: '#1877F2',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  textInfo: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '4E4B66',
    paddingBottom: 30,
    color: 'black',
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: 'black',
    paddingTop: 16,
  },
  followers: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  numberFollowers: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: 'black',
  },
  profile: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: 'black',
  },
  textNewsRecentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 13,
  },
  buttonEditWebsiteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  nameAndInfoContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  followersContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageInfo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
    paddingTop: 13,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileAndSetting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    paddingHorizontal: 24,
    paddingTop: 34,
  },
});
