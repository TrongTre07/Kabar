import { View, Text, TextInput, Button, Image } from 'react-native'
import React, {useState} from 'react'

const Hello = () => {

    const [name, setName] = useState('Trong dep trai');
    const changeName = () =>{
        setName ("Trong qua dep trai");
    }
    

  return (
    <View>
      <Text>Hello</Text>
      <Text>{name}</Text>

      <TextInput placeholder='What your name?'/>
      <Button title='Submit'
      onPress={changeName}/>
      <Image source={require('../../media/images/img.jpg')}
      style = {{width: 300, height: 200}}
      resizeMode= 'cover'
      />

      <Image source={{uri : 'https://images4.alphacoders.com/115/1151249.jpg'}}
      style = {{width:300, height: 200}}
      resizeMode= 'cover' />
    </View>
  )
}

export default Hello