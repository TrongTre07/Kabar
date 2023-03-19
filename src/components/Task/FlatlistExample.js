import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DataExample from '../Data/DataExample';
import DataCategory from '../Data/DataCategory';

const Data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({index}) => {
  return (
    <View style={{backgroundColor: 'gray'}}>
      {/* <Text style={{backgroundColor: 'tomato'}}>{item.id}</Text>
      <Text style={{backgroundColor: 'tomato'}}>{item.title}</Text> */}
      <Text style={{backgroundColor:'tomato'}}>{index.id}</Text>
    </View>
  );
};

const FlatlistExample = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
      data={DataCategory}
      renderItem={({item, index}) => <Item index={item}/>}
      keyExtractor={item => item.id}
      horizontal={true}></FlatList>
    
    </View>
  );
};

export default FlatlistExample;

const styles = StyleSheet.create({});
