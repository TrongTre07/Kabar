import {FlatList, Pressable, StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';

const Explore = () => {
  const data = [
    {
      id: '1',
      image: require('../../../../media/images/AvatarImage.jpg'),
      title: 'Trong Dep Trai',
      content: 'Tralsdkfjalkdfjaljflaksfjlaksdjflaks asldkfj alskdfj alskdjflaksdjflkasjf',
    },
  ];

  const Item = ({item}) => {
    return (
      <View style={styles.listContainer}>
        {/* Image and content */}
      
        <View style={styles.imageContentContainer}>
          <Image style={{width: 70, height: 70}} source={item.image}></Image>
          <View style={styles.titleContentContainer}>
            <Text>{item.title}</Text>
            <Text numberOfLines={2}>{item.content}</Text>
          </View>
        </View>

        {/* Button */}
        {/* <Pressable style={{backgroundColor: 'blue'}}>
          <Text>Save</Text>
        </Pressable> */}
        <Button title='Save'></Button>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Explore</Text>

      {/* Topic See All */}
      <View style={styles.topicSeeAll}>
        <Text>Topic</Text>
        <Text>See All</Text>
      </View>

      <FlatList
        data={data}
        renderItem={({item, index}) => <Item item={item} />}
        keyExtractor={item => item.id}></FlatList>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  titleContentContainer:{
flexDirection:'column',
justifyContent:'flex-start'
  },
  imageContentContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    maxWidth:'50%'
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topicSeeAll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    paddingTop: 34,
    paddingHorizontal: 24,
  },
});
