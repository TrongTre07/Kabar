import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'

const Insert = (props) => {
  return (
    <View style={styles.container}>
      <Text>Insert</Text>
    </View>
  )
}

export default Insert

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 24
    }
})