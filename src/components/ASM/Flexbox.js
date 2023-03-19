import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}/>
      <View style={styles.view2}/>
      <View style={styles.view3}/>
    </View>

    // <View style={styles.container2}>
    //   <View style={styles.view5}></View>
    //   <View style={styles.view6}></View>
    //   <View style={styles.view7}></View>
    // </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  view5: {
    width: 50,
    height: 50,
    backgroundColor: 'tomato',
  },
  view6: {
    width: 50,
    height: 50,
    backgroundColor: 'gold',
  },
  view7: {
    width: '100%',
    height: '70%',
    backgroundColor: 'silver',
    position:'absolute',
    bottom:'20%',
    left:0
  },
  container2:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around'
  },

  view1: {
    width: '100%',
    height: 50,
    backgroundColor: 'dogderblue',
    flex: 1,
  },
  view2: {
    
    height: 50,
    backgroundColor: '#18E77E',
  },
  view3: {
    
    height: 50,
    backgroundColor: '#1ECBE1',
  },
  view4: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});
