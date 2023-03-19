import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Homepage2 = () => {
  return (
    <View style={{backgroundColor: 'white', flex:1}}>
      <View style={[styles.container]}>
        <View>
          {/* Logo HomePage and Bell */}
          <View style={styles.top}>
            <Image source={require('../../media/images/Kabar.png')}></Image>
            <Image source={require('../../media/images/Bell.png')}></Image>
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
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 24,
          marginTop: 16,
        }}>
        {/* Category */}
        <Text style={styles.category}>All</Text>
        <Text style={styles.category}>Sports</Text>
        <Text style={styles.category}>Politics</Text>
        <Text style={styles.category}>Bussiness</Text>
        <Text style={styles.category}>Health</Text>
        <Text style={styles.category}>Travel</Text>
        <Text style={styles.category}>Sicence</Text>
      </View>

      <View style={[styles.container2]}>
        {/* View of List Content */}
        <View style={[styles.listContent]}>
          <View style={styles.content}>
            {/* Image of Content */}
            <Image
              style={styles.image}
              source={require('../../media/images/President.png')}
            />

            {/* Content */}
            <View style={styles.textOfContent}>
              <Text style={styles.legion}>Europe</Text>
              <Text style={styles.textContent} numberOfLines={2}>
                Ukraine's President Zelensky to BBC: Blood money being paid very
                strong
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
                    <Image source={require('../../media/images/Logo.png')} />
                    <Text style={styles.channelName}>Elden News</Text>
                  </View>

                  {/* Logo Time and Time Posted */}
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={{marginLeft: 14}}
                      source={require('../../media/images/ClockTimePost.png')}
                    />
                    <Text style={styles.timePosted}>4h ago</Text>
                  </View>
                </View>
                <Image source={require('../../media/images/ThreeDots.png')} />
              </View>
            </View>
          </View>

          {/* Content 2 */}
          <View style={styles.content}>
            {/* Image of Content */}
            <Image
              style={styles.image}
              source={require('../../media/images/President.png')}
            />

            {/* Content */}
            <View style={styles.textOfContent}>
              <Text style={styles.legion}>Europe</Text>
              <Text style={styles.textContent} numberOfLines={2}>
                Ukraine's President Zelensky to BBC: Blood money being paid very
                strong
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
                    <Image source={require('../../media/images/Logo.png')} />
                    <Text style={styles.channelName}>Elden News</Text>
                  </View>

                  {/* Logo Time and Time Posted */}
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={{marginLeft: 14}}
                      source={require('../../media/images/ClockTimePost.png')}
                    />
                    <Text style={styles.timePosted}>4h ago</Text>
                  </View>
                </View>
                <Image source={require('../../media/images/ThreeDots.png')} />
              </View>
            </View>
          </View>

          {/* Content 3 */}
          <View style={styles.content}>
            {/* Image of Content */}
            <Image
              style={styles.image}
              source={require('../../media/images/President.png')}
            />

            {/* Content */}
            <View style={styles.textOfContent}>
              <Text style={styles.legion}>Europe</Text>
              <Text style={styles.textContent} numberOfLines={2}>
                Ukraine's President Zelensky to BBC: Blood money being paid very
                strong
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
                    <Image source={require('../../media/images/Logo.png')} />
                    <Text style={styles.channelName}>Elden News</Text>
                  </View>

                  {/* Logo Time and Time Posted */}
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={{marginLeft: 14}}
                      source={require('../../media/images/ClockTimePost.png')}
                    />
                    <Text style={styles.timePosted}>4h ago</Text>
                  </View>
                </View>
                <Image source={require('../../media/images/ThreeDots.png')} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Homepage2;

const styles = StyleSheet.create({
  listContent: {
    height: '63%',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
  },
  container: {
    paddingLeft: 24,
    paddingTop: 34.5,
    paddingRight: 24,
  },
});
