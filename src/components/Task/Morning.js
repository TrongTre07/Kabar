import {View, Text, Alert, TextInput, Button, StyleSheet, Style} from 'react-native';
import React, {useState} from 'react';

export default function Morning() {
  const [inputNumber, setInputNumber] = useState('');
  const [randomNumber, setRandomNumber] = useState(null);
  let x;
  const checkResult = () => {};

  const setRandom = () => {
    const randomNumber = Math.round(Math.random() * 10);
    setRandomNumber(randomNumber);
    if (inputNumber == randomNumber) {
      Alert.alert('Chuc mung');
    } else {
      Alert.alert('Sai roi');
    }
  };

  

  return (
    <View>
      <Text>Chuong trinh so xo kien thiet SaiGon</Text>
      <TextInput
        placeholder="Nhap so"
        value={inputNumber}
        onChangeText={setInputNumber}
      />

      <Button title="Check" onPress={setRandom} />

      <Text>Ket qua: {randomNumber}</Text>
    </View>
  );

  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#61dafb'
  },
});

