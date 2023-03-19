import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import DataCategory from '../../../Data/DataCategory';
import DataNews from '../../../Data/DataNews';

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

const Homepage2 = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={[styles.container]}>
        <View>
          {/* Logo HomePage and Bell */}
          <View style={styles.top}>
            <Image source={require('../../../../media/images/Kabar.png')}></Image>
            <Image source={require('../../../../media/images/Bell.png')}></Image>
          </View>
        </View>

        {/* Lastest and see all */}
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
      {/* Category */}
      <View
        style={{
          // flexDirection: 'row',
          // justifyContent: 'space-between',
          paddingLeft: 24,
          marginTop: 16,
          
        }}>
        {/* Category */}
        <FlatList
          data={DataCategory}
          renderItem={({item, index}) => <CategoryItem item={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{width: 5}} />}
          
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: -10}}
        />
      </View>

      
        {/* View of List Content */}
        <View style={{flex:1}}>
          <FlatList
            data={DataNews}
            renderItem={({item, index}) => <NewsItem item={item}></NewsItem>}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{height: 10}} />}
            style={[{marginTop: 24}]}
          />
        </View>
      
    </View>
  );
};

export default Homepage2;

const styles = StyleSheet.create({
  listContent: {
    // height: '63%',
    // flexDirection: 'column',
    // justifyContent: 'space-between',
  },
  legion: {
    fontWeight: '400',
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
  timePosted: {
    marginLeft: 6,
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  channel: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 6,
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
  content: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  image: {
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 3,
    width: 96,
    height: 96,
  },
  category: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  seeAll: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  lastest: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: 'black',
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
