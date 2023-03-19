import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

const Register = props => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const {navigation} = props;
  return (
    <View style={styles.container}>
      {/* Text Hello */}
      <Text style={styles.hello}>Hello!</Text>
      {/* <Text style={styles.again}>Again!</Text> */}
      <Text style={styles.welcome}>Signup to get started</Text>

      {/* Username */}
      <Text style={styles.username}>Username</Text>
      <TextInput style={styles.usernamePlace}></TextInput>

      {/* Password */}
      <Text style={styles.password}>Password</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.usernamePlace} secureTextEntry></TextInput>
        <Image
          source={require('../../media/images/EyeIcon.png')}
          style={styles.eyeIcon}></Image>
      </View>

      {/* Checkbox remember me  */}
      <View style={styles.checkBox}>
        <View style={styles.onCheckbox}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={styles.rememberMe}>Remember me</Text>
        </View>
        <Text style={styles.forgotPassword}>Forgot the Password ?</Text>
      </View>

      <Pressable style={styles.btnLogin}>
        <Text style={styles.textLogin}>Login</Text>
      </Pressable>
      <View justifyContent={'center'} flexDirection={'row'}>
        <Text style={styles.continue}>or continue with</Text>
      </View>
      {/* //2 nut dang nhap fb va gg */}
      <View style={styles.btnSocials}>
        {/* //nut fb */}
        <View style={styles.btnFB}>
          <Image
            style={styles.logoSocials}
            source={require('../../media/images/fb.png')}></Image>
          <Text style={styles.txtFB}>Facebook</Text>
        </View>
        {/* //nut gg */}
        <View style={styles.btnGG}>
          <Image
            style={styles.logoSocials}
            source={require('../../media/images/gg.png')}></Image>
          <Text style={styles.txtGG}>Google</Text>
        </View>
      </View>

      {/* Dang ky */}
      <View style={styles.signup}>
        <Text style={styles.text1}>Already have an account ? </Text>
        <Text onPress={() => navigation.navigate('Login')} style={styles.text2}>
          Login{' '}
        </Text>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  onCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMe: {
    color: 'black',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 18,
  },
  forgotPassword: {
    width: 150,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#5890FF',
  },
  signup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  text1: {
    color: '#4E4B66',
    height: 21,
    fontSize: 14,
    fontWeight: '400',
  },
  text2: {
    color: '#1877F2',
    height: 21,
    fontSize: 14,
    fontWeight: 'bold',
  },
  continue: {
    color: 'black',
    marginVertical: 16,
  },
  logoSocials: {
    width: 21,
    height: 21,
  },
  btnFB: {
    flexDirection: 'row',
    width: '40%',
    backgroundColor: '#EEF1F4',
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnGG: {
    flexDirection: 'row',
    width: '40%',
    backgroundColor: '#EEF1F4',
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtFB: {
    color: 'black',
    marginLeft: 12,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  txtGG: {
    color: 'black',
    marginLeft: 12,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  btnSocials: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inputContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 12,
  },
  textLogin: {
    fontWeight: '600',
    width: 44,
    height: 24,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: 'white',
  },
  btnLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 24,
    gap: 10,
    width: '100%',
    height: 50,
    backgroundColor: '#1877F2',
    borderRadius: 6,
  },
  password: {
    marginBottom: 4,
    marginTop: 14,
    width: 76,
    height: 21,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  usernamePlace: {
    borderWidth: 1,
    // borderColor: "thistle",
    borderColor: 'black',
    alignItems: 'flex-start',
    padding: 10,
    gap: 10,
    width: '100%',
    height: 48,
    backgroundColor: 'white',
    borderRadius: 6,
    border: 1,
  },
  username: {
    marginBottom: 4,
    marginTop: 48,
    width: 80,
    height: 21,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  welcome: {
    width: 222,
    height: 60,
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  again: {
    color: '#1877F2',
    letterSpacing: 0.12,
    lineHeight: 72,
    fontWeight: '700',
    fontSize: 48,
  },
  hello: {
    color: '#1877F2',
    letterSpacing: 0.12,
    lineHeight: 72,
    fontWeight: '700',
    fontSize: 48,
  },
  container: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 68,
    backgroundColor: 'white',
  },
});
