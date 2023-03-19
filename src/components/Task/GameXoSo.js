import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function GameXoXo() {
  const [numberImport, setNumberImport] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);
  const lineNumber = 3;

  const CheckNumber = () => {
    const random = Math.floor(Math.random() * lineNumber);
    setRandomNumber(random);
    console.log('random number', random);
    if (numberImport < 3 && numberImport >= 0) {
      if (random == numberImport) {
        Alert.alert('Chúc Mừng', 'Bạn đã trúng giải đặc biệt');
      } else {
        Alert.alert('Oops', 'Bạn chọn sai rồi');
      }
    } else if (isNaN(numberImport)) {
      Alert.alert('Không hợp lệ', 'Bạn hãy chọn số nhé!');
    } else {
      Alert.alert('Không hợp lệ', 'Bạn hãy chọn từ 0 đến ' + lineNumber);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Game Xổ Số Không Lối Về</Text>
      <Text></Text>
      <TextInput
        style={styles.textInput}
        placeholder="Mời bạn chọn số"
        placeholderTextColor={'black'}
        keyboardType="numeric"
        onChangeText={setNumberImport}></TextInput>
      <Pressable style={styles.button} onPress={() => CheckNumber()}>
        <Text style={styles.btnPlay}>Play</Text>
      </Pressable>
      <Text style={styles.result}>Kết Quả: {randomNumber}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  result: {
    color: 'black',
    fontSize: 30,
    letterSpacing: 0.12,
  },
  btnPlay: {
    fontSize: 40,
    color: 'black',
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    backgroundColor: '#f194ff',
    width: '30%',
    height: '10%',
    borderRadius: 20,
  },
  textInput: {
    borderWidth: 1,
    width: '50%',
    textAlign: 'center',
    borderRadius: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  title: {
    fontSize: 25,
    letterSpacing: 0.12,
    color: '#2600FF',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  colors: {
    color: 'red',
  },
});
