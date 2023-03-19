import { View, Text, Button } from 'react-native'
import React from 'react'

const Scene2 = (props) => {
const {navigation, route: {params: {hello, hi}}} = props;

  return (
    <View>
      <Text>{hello}</Text>
      <Text>{hi}</Text>
      <Button
      title='Go To Screen 1'
      onPress={() => navigation.goBack()}/>
    </View>
  )
}

export default Scene2