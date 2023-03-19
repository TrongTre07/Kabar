import { View, Text, Button } from 'react-native'
import React from 'react'

const Scene1 = (props) => {

const {navigation} = props;

  return (
    <View>
      <Text>Scene1</Text>
      <Button
      title='Go to Screen 2'
      onPress={() => navigation.navigate('Scene2', 
      {
        hello: 'Nguyen Van A',
        hi:'ble ble ble'
      })}/>
    </View>
  )
}

export default Scene1