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
import React, {useState, useCallback, useContext} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {NewsContext} from '../utilities/NewsContext';

const CreateNews = props => {
  const {navigation} = props;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {uploadImage, addNews} = useContext(NewsContext);
  const [image, setImage] = useState(null);

  const upload = async (cover) => {
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
    setImage(result?.path);
  };

  const handlePublish = async () => {
    const result = await addNews(title, content, image);
    if (result) {
      Alert.alert('Add news success');
      setImage(null)
      setTitle('')
      setContent('')
    } else {
      Alert.alert('Add news fail');
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

  // console.log('>>>>>>>>>>>> ', cover);

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
        {cover ? (
          <Pressable style={styles.addCoverPhoto} onPress={handleChoosePhoto}>

            <Image
            source={{uri: cover.assets[0]?.uri}}
            style={{width: '100%', height: 180}}
          />
          
          </Pressable>
        ) : (
          <Pressable style={styles.addCoverPhoto} onPress={handleChoosePhoto}>
            {/* + Icon and Add Cover Photo */}
            <View style={styles.plusIconAndAddCoverPhotoContainer}>
              <Image
                style={{transform: [{rotate: '45deg'}]}}
                source={require('../../../../media/images/IconX.png')}></Image>
              <Text style={{color:'black'}}>Add Cover Photo</Text>
            </View>
          </Pressable>
        )}
      </View>

      {/* News Title */}
      <TextInput
        placeholder="News Tittle"
        placeholderTextColor={'black'}

        style={styles.newsTittle}
        value={title}
        onChangeText={setTitle}></TextInput>

      <TextInput
        style={{fontWeight: '400', fontSize: 16, lineHeight: 24}}
        multiline={true}
        placeholder="Add News/Artical"
        placeholderTextColor={'black'}
        value={content}
        onChangeText={setContent}></TextInput>

      {/* Pushlish container */}
      <View>
        <Pressable style={styles.pubPressable} onPress={handlePublish}>
          <Text style={styles.publish}>Publish</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreateNews;

const styles = StyleSheet.create({
  publish: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
  },
  pubPressable: {
    backgroundColor: 'blue',
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
