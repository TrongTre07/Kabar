/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useContext, createContext, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
// import Hello from './src/components/Demo/Hello';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import Morning from './src/components/Demo/Morning';
// import Login from './src/components/ASM/Login';

// ................................................
// import GameXoSo from './src/components/Task/GameXoSo';
// import Morning from './src/components/Task/Morning';
// import Login from './src/components/ASM/Login';
// import Flexbox from './src/components/ASM/Flexbox';
// import Register from './src/components/ASM/Register';
// import Homepage from './src/components/ASM/Homepage';
// import Homepage2 from './src/components/ASM/Homepage2';
// import TestSomeProps from './src/components/Task/TestSomeProps';
// import FlatlistExample from './src/components/Task/FlatlistExample';
// import Scene1 from './src/components/Task/Scene1';
// import Scene2 from './src/components/Task/Scene2';
// import Scene3 from './src/components/Task/Scene3';
// import Scene4 from './src/components/Task/Scene4';
// import HomepageCopy from './src/components/ASM/HomepageCopy';
// import Homepage2Copy from './src/components/ASM/Homepage2Copy';
// import BottomNavigation from './src/components/app/appNavigation/BottomNavigation';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Profile from './src/components/app/appNavigation/Profile';

import { UsersProvider } from './src/components/app/users/utilities/UsersContext';
import { NewsProvider } from './src/components/app/news/utilities/NewsContext';
import AppNavigation from './src/components/app/appNavigation/AppNavigation';
import EditProfile from './src/components/app/users/screens/EditProfile';
import CreateNews from './src/components/app/users/screens/CreateNews';
import DetailHomePage from './src/components/app/news/screens/DetailHomePage';
import Setting from './src/components/app/users/screens/Setting';
import Homepage1 from './src/components/app/news/screens/Homepage1';
import Login from './src/Lafyuu/Login'

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();



/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const App = () => {
  return (
    <UsersProvider>
      <NewsProvider>
        <AppNavigation/>
        
      </NewsProvider>
    </UsersProvider>
    // <Login/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    fontSize: 30,
  },
  red: {
    color: 'blue',
  },
});

export default App;
