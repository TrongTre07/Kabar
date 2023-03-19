import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Alert
} from 'react-native';
import React, {useContext, useState, useCallback} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {NewsContext} from '../../news/utilities/NewsContext';
import {UsersContext} from '../utilities/UsersContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const EditProfile = (props) => {
  const [name, setName] = useState('Thay Chan Dep Trai');
  const [address, setAddress] = useState('Hong biet nua');
  const [phone, setPhone] = useState('0123456789');
  const [avatarImage, setAvatarImage] = useState('');
  const [dob, setDob] = useState('2000-12-12');
  const {uploadProfile} = useContext(UsersContext);
  const {uploadImage} = useContext(NewsContext);

  const {avatar} = useContext(UsersContext);


  const {navigation} = props;

  const upload = async cover => {
    setCover(cover);
    cover = cover.assets[0];
    const formData = new FormData();
    formData.append('image', {
      uri: cover.uri,
      type: cover.type,
      name: cover.fileName,
    });
    const result = await uploadImage(formData);

    console.log(result);
    setAvatarImage(result?.path);
  };

  const handlePublish = async () => {
    const result = await uploadProfile(name, address, phone, avatar, dob);
    if (result) {
      Alert.alert('Add Profile Success');
      // setName('');
      // setAddress('');
      // setPhone('');
      // setAvatar('');
      // setDob('');
      console.log("avatarImage: ", avatar)
      navigation.goBack()
    } else {
      Alert.alert('Add Profile fail');
    }
  };

  const [cover, setCover] = useState(null);
  const handleChoosePhoto = useCallback(type => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra: true,
    };
    launchImageLibrary(options, upload);
    // launchCamera(options, upload);
  });

  return (
    <View style={styles.container}>
      {/* X V and Edit Profile */}
      <View style={styles.editProfileContainer}>
        <Pressable onPress={()=> navigation.goBack()}>
        <Image source={require('../../../../media/images/IconX.png')} />
        </Pressable>
        <Text style={styles.editProfile}>Edit Profile</Text>
        <Pressable onPress={handlePublish}>
        <Image source={require('../../../../media/images/IconTick.png')} />
        </Pressable>
      </View>

      {/* Image Avatar */}
      {cover ? (
                <Pressable onPress={handleChoosePhoto}>
                <View style={styles.imageAvatarContainer}>
                  <Image
                    style={styles.imageAvatar}
                    source={{uri: cover.assets[0]?.uri}}
                  />
      
                  <Image
                    style={styles.iconCamera}
                    source={require('../../../../media/images/IconCamera.png')}
                  />
                </View>
              </Pressable>
        // <Pressable onPress={handleChoosePhoto}>
        //   <Image
        //     source={{uri: cover.assets[0]?.uri}}
        //     style={styles.imageAvatar}
        //   />
        // </Pressable>
      ) : (
        <Pressable onPress={handleChoosePhoto}>
          <View style={styles.imageAvatarContainer}>
            <Image
              style={styles.imageAvatar}
              // source={require('../../../../media/images/Makima.png')}
              source={{uri: avatar}}
            />

            <Image
              style={styles.iconCamera}
              source={require('../../../../media/images/IconCamera.png')}
            />
          </View>
        </Pressable>
      )}

      {/* 4 Views Information */}
      <View style={styles.fourViews}>
        {/* Username */}
        <View style={styles.eachView}>
          <Text style={styles.text}>Name</Text>
          <TextInput
            style={styles.textInputInfor}
            value={name}
            onChangeText={setName}></TextInput>
        </View>

        {/* Fullname */}
        <View style={styles.eachView}>
        <Text style={styles.text}>Address</Text>
          <TextInput
            style={styles.textInputInfor}
            value={address}
            onChangeText={setAddress}></TextInput>
        </View>

        {/* Email Address */}
        <View style={styles.eachView}>
        <Text style={styles.text}>Phone</Text>
          <TextInput
            style={styles.textInputInfor}
            value={phone}
            keyboardType="number-pad"
            maxLength={10}
            onChangeText={setPhone}></TextInput>
        </View>

        {/* Phone Number */}
        <View style={styles.eachView}>
        <Text style={styles.text}>Date of Birth</Text>
          <TextInput


            style={styles.textInputInfor}
            value={dob}
            onChangeText={setDob}></TextInput>
        </View>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  text:{
color:'black'
  },
  editProfile: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
    letterSpacing: 0.12,
    marginBottom: 16,
  },
  fourViews: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  eachView: {},
  textInputInfor: {
    borderWidth: 1,
    borderColor: '#4E4B66',
    borderRadius: 6,
    marginTop: 4,
    marginBottom: 16,
    color:'black'
  },
  iconCamera: {
    position: 'absolute',
    bottom: 0,
    right: 100,
  },
  imageAvatarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 16,
  },
  imageAvatar: {
    width: 140,
    height: 140,
    borderWidth: 1,
    borderRadius: 70,
  },
  editProfileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 28,
  },
});
