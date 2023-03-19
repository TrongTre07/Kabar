import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <View style={styles.logoBackground}>
          <Image
            style={styles.logo}
            source={require('../media/images/LafyuuLogo.png')}
          />
        </View>
        <Text style={styles.welcome}>Welcome to Lafyuu</Text>
        <Text style={[styles.signInToContinue, {marginBottom: 20}]}>
          Sign in to continue
        </Text>
      </View>
      {/* Email input place */}
      <View style={styles.inputPlaceContainer}>
        <TextInput
          placeholder="Your Email"
          style={styles.inputPlace}></TextInput>
        <Image
          style={styles.mailIcon}
          source={require('../media/images/Mail.png')}
        />
      </View>
      {/* Your password */}
      <View style={styles.inputPlaceContainer}>
        <TextInput
          placeholder="Your Email"
          style={styles.inputPlace}></TextInput>
        <Image
          style={styles.mailIcon}
          source={require('../media/images/IconLock.png')}
        />
      </View>
      {/* Sign in button */}
      <Pressable style={styles.btn}>
        <Text style={styles.signin}>Sign In</Text>
      </Pressable>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={[styles.or, {marginVertical: 20}]}>OR</Text>
      </View>

      {/* Loggin with google */}
      <View style={styles.socialPlaceContainer}>
        <TextInput
          placeholder="Login with Google"
          style={styles.socialBtn}></TextInput>
        <Image
          style={styles.socialIcon}
          source={require('../media/images/gg.png')}
        />
      </View>

      {/* loggin with facebook */}
      <View style={styles.socialPlaceContainer}>
        <TextInput
          placeholder="Login with Facebook"
          style={styles.socialBtn}></TextInput>
        <Image
          style={styles.socialIcon}
          source={require('../media/images/fb.png')}
        />
      </View>

      {/* Forgot password */}
      <View style={styles.forgotContainer}>
        <Text style={styles.forgot}>Forgot Password</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Don't have an account?</Text>
          <Text style={styles.forgot}> Register</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
    forgot:{
color:'#40BFFF',
fontWeight:'700',
fontSize:12,
lineHeight: 20,
    },
  forgotContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  or: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 30,
    color: '#9098B1',
  },
  signin: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 30,
    letterSpacing: 0.5,
    color: 'white',
  },
  signInToContinue: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 25,
    letterSpacing: 0.5,
    color: '#9098B1',
  },
  welcome: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 30,
    letterSpacing: 0.5,
    color: '#223263',
    marginVertical: 16,
  },
  socialBtn: {
    borderWidth: 1,
    borderColor: '#EBF0FF',
  },
  socialPlaceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
  },
  socialIcon: {
    position: 'absolute',
    top: 13,
    left: 13,
    width: 24,
    height: 24,
  },
  btn: {
    backgroundColor: '#40BFFF',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mailIcon: {
    position: 'absolute',
    bottom: 17,
    left: 15,
  },
  inputPlace: {
    borderWidth: 1,
    // borderColor: '#EBF0FF',
    borderColor: 'black',
    borderRadius: 5,
    paddingLeft: 50,
  },
  inputPlaceContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  logoBackground: {
    width: 75,
    height: 75,
    backgroundColor: '#40BFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  logo: {
    width: 35,
    height: 35,
  },
  logoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 16,
  },
});
