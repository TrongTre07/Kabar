import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableHighlight,
  Alert,
  Button,
  TextInput,
  
} from 'react-native';
import React from 'react';

const CreateNews = () => {
  return (
    <View style={styles.container}>
      {/* Back Arrow, Create News, Three Dots */}
      <View style={styles.createNewsContainer}>
        <Image source={require('../../../../media/images/BackArrow.png')} />
        <Text style={styles.createNews}>Create News</Text>
        <Image
          source={require('../../../../media/images/ThreeDotsVertical.png')}
        />
      </View>

      {/* Add Cover Photo */}
      <View>
        <Pressable
          style={styles.addCoverPhoto}
          onPress={() => console.log('Pressed')}>
          {/* + Icon and Add Cover Photo */}
          <View style={styles.plusIconAndAddCoverPhotoContainer}>
            <Image
              style={{transform: [{rotate: '45deg'}]}}
              source={require('../../../../media/images/IconX.png')}></Image>
            <Text>Add Cover Photo</Text>
          </View>
        </Pressable>
      </View>

      {/* News Title */}
      <TextInput
        placeholder="News Tittle"
        style={styles.newsTittle}></TextInput>

      <TextInput
        style={{fontWeight: '400', fontSize: 16, lineHeight: 24, }}
        placeholder="Add News/Artical"></TextInput>

      {/* Pushlish container */}
      <View>
        <Pressable style={styles.pubPressable}>
          <Text style={styles.publish}>Publish</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreateNews;

const styles = StyleSheet.create({
  publish:{
    fontWeight: '600', fontSize: 16, lineHeight: 24
  },
  pubPressable: {
    backgroundColor: '#EEF1F4',
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createNews: {
    color: 'black',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  newsTittle: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    marginBottom: 16,
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 36,
    color: '#A0A3BD',
  },
  plusIconAndAddCoverPhotoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCoverPhoto: {
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    width: '100%',
    height: 180,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'black',
    borderRadius: 1,
  },
  createNewsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    paddingHorizontal: 24,
    paddingTop: 28,
  },
});
