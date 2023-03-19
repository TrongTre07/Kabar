import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {NewsContext} from '../utilities/NewsContext';

const DetailHomePage = props => {
  const {navigation} = props;
  const id= props.route?.params?.id;
  const {getDetailNews} = useContext(NewsContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await getDetailNews(id);
      console.log('ID: ', id)
      setData(result);
    };
    if (id) getData();
    return () => {};
  }, [id]);

  {console.log(id)}

  return (
    (id && data && data._id.toString() == id.toString()) ? 
    <View style={styles.container}>
      {/* Arrow Back and Three Dots */}
      <View style={styles.twoIcons}>
        <Image source={require('../../../../media/images/BackArrow.png')} />
        <Image
          source={require('../../../../media/images/ThreeDotsVertical.png')}
        />
      </View>

      {/* Content */}
      <View>
        {/* Channel, Name, Following */}
        <View style={styles.channelButtonContainer}>
          {/* Logo Channel, Name Channel */}
          <View style={styles.channelContainer}>
            <Image
              style={{width: 50, height: 50, borderWidth: 1, borderRadius: 25}}
              source={require('../../../../media/images/heart.png')}
            />
            <View style={styles.channelNameTimeContainer}>
              <Text style={styles.channelName}>Trong Tre</Text>
              <Text style={styles.timePosted}>4h Ago</Text>
            </View>
          </View>

          {/* Button Following */}
          <Pressable style={styles.buttonFollowing}>
            <Text style={styles.textFollowing}>Following</Text>
          </Pressable>
        </View>

        {/* Image Content */}
        <Image
          style={styles.imageContent}
          source={{uri: data.image}}
        />

        {/* Legion */}
        <Text style={styles.textLegion}>Europe</Text>

        {/* Main Title */}
        <Text style={styles.mainTitle}>
          {data.title}
        </Text>

        {/* Main Content */}
        <Text style={styles.mainContent}>
          {data.content}
        </Text>
      </View>
    </View>
    : <Text>Getting data</Text>
  );
};

export default DetailHomePage;

const styles = StyleSheet.create({
  mainContent: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#4E4B66',
    marginTop: 15,
  },
  mainTitle: {
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 36,
    color: 'black',
    letterSpacing: 0.12,
  },
  textLegion: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#4E4B66',
    letterSpacing: 0.12,
    marginVertical: 10,
  },
  timePosted: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#4E4B66',
    letterSpacing: 0.12,
  },
  channelName: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
    letterSpacing: 0.12,
  },
  textFollowing: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
    letterSpacing: 0.12,
  },
  buttonFollowing: {
    backgroundColor: '#1877F2',
    height: '55%',
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
  },
  channelNameTimeContainer: {
    marginLeft: 4,
  },
  imageContent: {
    width: '100%',
    height: 226,
  },
  channelButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  channelContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  twoIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    paddingTop: 38,
    paddingHorizontal: 24,
    flex: 1,
  },
});
