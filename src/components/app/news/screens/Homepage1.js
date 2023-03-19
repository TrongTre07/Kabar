import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  Pressable,
  Alert,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import DataCategory from '../../../Data/DataCategory';
import DataNews from '../../../Data/DataNews';
import {NewsContext} from '../utilities/NewsContext';

const CategoryItem = ({item}) => {
  return (
    <View>
      <Text style={styles.category}>{item.kind}</Text>
    </View>
  );
};
// -id, title, content, image, createAt, createBy,

const Homepage1 = props => {
  const {navigation} = props;
  const {getNews, deleteNews, getDetailNews} = useContext(NewsContext);
  const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const [detailData, setDetailData] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  const refreshingData = () => {
    setRefreshing(true);
    const getData = async () => {
      const result = await getNews();
      setData(result);
      setRefreshing(false);
    };
    getData();
  };

  const onDelete = async id => {
    const result = await deleteNews(id);
    if (result) {
      refreshingData();
      Alert.alert('PopUps', 'Deleted Successfully', [
        {
          text: 'Got it',
          onPress: () => {},
          style: 'cancel',
        },
      ]);
    } else {
      console.log('Delete khong thanh cong');
    }
  };

  const onConfirmDelete = async id => {
    Alert.alert('Confirm delete', 'Are you sure want to delete', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          onDelete(id);
        },
      },
    ]);
  };

  const NewsItem = ({item}) => {
    return (
      <View>
        <Pressable
          // onPress={() => navigation.navigate('DetailNews', {id: item._id})}
          onPress={() => navigation.navigate('DetailNews', {id: item._id})}
          onLongPress={() => onConfirmDelete(item._id)}>
          <View style={[styles.container2]}>
            <View style={[styles.listContent]}>
              <View style={styles.content}>
                {/* Image of Content */}
                <Image style={styles.image} source={{uri: item.image}} />

                {/* Content */}
                <View style={styles.textOfContent}>
                  <Text style={styles.legionContent}>{item.title}</Text>
                  <Text style={styles.textContent} numberOfLines={2}>
                    {item.content}
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '40%',
                    }}>
                    {/* Channel, Logo, IconClock and Time Posted */}
                    <View style={styles.channel}>
                      {/* Channel name and Logo */}
                      <View style={{flexDirection: 'row'}}>
                        {/* <Image source={item.logoChannel} /> */}
                        {/* <Text style={styles.channelName}>{item.nameChannel}</Text> */}
                      </View>

                      {/* Logo Time and Time Posted */}
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                          style={{marginLeft: 14}}
                          // source={item.clockTimePosted}
                        />
                        {/* <Text style={styles.timePosted}>{item.timePosted}</Text> */}
                      </View>
                    </View>
                    <Image source={item.threeDots} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Pressable>
        {/* <Text onPress={() => onConfirmDelete(item._id)}>Delete</Text> */}
      </View>
    );
  };

  useEffect(() => {
    const getData = async () => {
      const result = await getNews();
      setData(result);
    };
    getData();
    return () => {};
  }, []);

  return data[0] ? (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.container}>
        {/* Logo HomePage and Bell */}
        <View style={styles.top}>
          <Image source={require('../../../../media/images/Kabar.png')}></Image>
          <Image source={require('../../../../media/images/Bell.png')}></Image>
        </View>

        {/* Search Box included Search Button and Fill Button */}
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchBox} />
          <View style={styles.searchFillter}>
            <Image
              style={styles.searchIcon}
              source={require('../../../../media/images/Search.png')}
            />
            <Image
              style={styles.searchIcon}
              source={require('../../../../media/images/Fillter.png')}
            />
          </View>
        </View>
        <View style={styles.Trending}>
          <Text style={styles.trend}>Trending</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.. */}
        {/* Image */}
        <Image
          style={{width: 345, height: 226, marginTop: 2}}
          source={{uri: data[0].image}}></Image>
        {/* // -id, title, content, image, createAt, createBy, */}

        {/* Legion */}
        <Text style={styles.legion}>{data[0].title}</Text>

        {/* Tittle */}
        <Text style={styles.tittle}>{data[0].content}</Text>
        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {/* Channel, Logo, IconClock and Time Posted */}
          <View style={styles.channel}>
            {/* Channel name and Logo */}
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../../../../media/images/Logo.png')} />
              <Text style={styles.channelName}>Elden News</Text>
            </View>

            {/* Logo Time and Time Posted */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{marginLeft: 14}}
                source={require('../../../../media/images/ClockTimePost.png')}
              />
              <Text style={styles.timePosted}>4h ago</Text>
            </View>
          </View>
          <Image source={require('../../../../media/images/ThreeDots.png')} />
        </View>

        {/* Lastest and seeAll */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 26,
          }}>
          <Text style={styles.lastest}>Lastest</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
      </View>

      <View style={styles.listCategory}>
        <FlatList
          data={DataCategory}
          renderItem={({item, index}) => <CategoryItem item={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{width: 5}} />}
          showsHorizontalScrollIndicator={false}
          // contentContainerStyle={{paddingBottom: -10}}
        />
      </View>

      <View style={{flex: 1}}>
        <FlatList
          refreshing={refreshing}
          onRefresh={refreshingData}
          data={data}
          renderItem={({item, index}) => <NewsItem item={item}></NewsItem>}
          keyExtractor={item => item._id}
          showsVerticalScrollIndicator={true}
          ItemSeparatorComponent={() => <View style={{height: 15}} />}
          style={[{marginTop: 24}]}
        />
      </View>
    </View>
  ) : (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'black',
          fontWeight: '700',
          fontSize: 20,
          lineHeight: 30,
        }}>
        Getting Data...
      </Text>
    </View>
  );
};

export default Homepage1;

const styles = StyleSheet.create({
  legionContent: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  listCategory: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingLeft: 24,
    paddingRight: 0,
    marginTop: 16,
  },
  lastest: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: 'black',
  },
  timePosted: {
    marginLeft: 6,
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  channelName: {
    marginLeft: 4,
    color: '#4E4B66',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: 0.12,
  },

  tittle: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    width: '85%',
    height: 24,
    color: 'black',
  },
  legion: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  listContent: {
    // height: '62%',
    // flexDirection: 'column',
    // justifyContent: 'space-between',
  },
  textContent: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    width: '45%',
    height: 48,
    color: 'black',
  },
  textOfContent: {
    marginLeft: 4,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 3,
    width: 96,
    height: 96,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  category: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  channel: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 6,
  },
  trend: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: 'black',
  },
  seeAll: {
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.12,
    color: '#4E4B66',
    lineHeight: 21,
  },
  Trending: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  searchIcon: {
    width: 20.5,
    height: 20.5,
  },
  searchFillter: {
    width: '92%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    marginHorizontal: 12,
    marginVertical: 14,
  },
  searchContainer: {
    position: 'relative',
    marginTop: 42,
  },
  searchBox: {
    borderWidth: 1,
    borderColor: '#4E4B66',
    height: 48,
    borderRadius: 6,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container2: {
    paddingLeft: 32,
    paddingRight: 24,
  },
  container: {
    paddingLeft: 24,
    paddingTop: 34.5,
    paddingRight: 24,
  },
});
