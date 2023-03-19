import {StyleSheet, Text, View, Image, TextInput, FlatList} from 'react-native';
import React from 'react';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import DataCategory from '../../Data/DataCategory';
import DataNews from '../../Data/DataNews';

const CategoryItem = ({item}) => {
  return (
    <View>
      <Text style={styles.category}>{item.kind}</Text>
    </View>
  );
};

const NewsItem = ({item}) => {
  return (
    <View style={[styles.container2]}>
      <View style={[styles.listContent]}>
        <View style={styles.content}>
          {/* Image of Content */}
          <Image style={styles.image} source={item.imageTitle} />

          {/* Content */}
          <View style={styles.textOfContent}>
            <Text style={styles.legionContent}>{item.legion}</Text>
            <Text style={styles.textContent} numberOfLines={2}>
              {item.mainContent}
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
                  <Image source={item.logoChannel} />
                  <Text style={styles.channelName}>{item.nameChannel}</Text>
                </View>

                {/* Logo Time and Time Posted */}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={{marginLeft: 14}}
                    source={item.clockTimePosted}
                  />
                  <Text style={styles.timePosted}>{item.timePosted}</Text>
                </View>
              </View>
              <Image source={item.threeDots} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const Homepage1 = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.container}>
        {/* Logo HomePage and Bell */}
        <View style={styles.top}>
          <Image source={require('../../../media/images/Kabar.png')}></Image>
          <Image source={require('../../../media/images/Bell.png')}></Image>
        </View>

        {/* Search Box included Search Button and Fill Button */}
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchBox} />
          <View style={styles.searchFillter}>
            <Image
              style={styles.searchIcon}
              source={require('../../../media/images/Search.png')}
            />
            <Image
              style={styles.searchIcon}
              source={require('../../../media/images/Fillter.png')}
            />
          </View>
        </View>
        <View style={styles.Trending}>
          <Text style={styles.trend}>Trending</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        {/* Image */}
        <Image
          style={{width: 345, height: 226, marginTop: 2}}
          source={require('../../../media/images/Warship.png')}></Image>

        {/* Legion */}
        <Text style={styles.legion}>Elden Ring</Text>

        {/* Tittle */}
        <Text style={styles.tittle}>Elden News: Elden Ring Got GOTY 2022</Text>

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
              <Image source={require('../../../media/images/Logo.png')} />
              <Text style={styles.channelName}>Elden News</Text>
            </View>

            {/* Logo Time and Time Posted */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{marginLeft: 14}}
                source={require('../../../media/images/ClockTimePost.png')}
              />
              <Text style={styles.timePosted}>4h ago</Text>
            </View>
          </View>
          <Image source={require('../../../media/images/ThreeDots.png')} />
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

      {/* List Category */}
      {/* <View style={styles.listCategory}>
        <Text style={styles.category}>All</Text>
        <Text style={styles.category}>Sports</Text>
        <Text style={styles.category}>Politics</Text>
        <Text style={styles.category}>Bussiness</Text>
        <Text style={styles.category}>Health</Text>
        <Text style={styles.category}>Travel</Text>
        <Text style={styles.category}>Sicence</Text>
      </View> */}
      <View style={styles.listCategory}>
        <FlatList
          data={DataCategory}
          renderItem={({item, index}) => <CategoryItem item={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{width: 5}} />}
          style={styles.listCategory}
          showsHorizontalScrollIndicator={false}
          // contentContainerStyle={{paddingBottom: -10}}
        />
      </View>

      <View style={{flex: 1}}>
        <FlatList
          data={DataNews}
          renderItem={({item, index}) => <NewsItem item={item}></NewsItem>}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{height: 15}} />}
          style={[{marginTop: 24}]}
        />
      </View>
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
