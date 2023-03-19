import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, createContext, useState} from 'react';
import AxiosInstance from '../../axiosClient/AxiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UsersContext = createContext();
export const UsersProvider = props => {
  const {children} = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [avatar, setAvatar] = useState(null)
  const register = async (email, password) => {
    try {
      const body = {
        email: email,
        password: password,
      };
      const response = await AxiosInstance().post('/users/register', body);
      return true;
    } catch (error) {
      console.log('register error: ', error);
    }
    return false;
  };

  const login = async (email, password) => {
    try {
      const body = {
        email: email,
        password: password,
      };
      const response = await AxiosInstance().post('/auth/login', body);

      // read Token
      const {token} = response.data;
      const {avatar} = response.data.user;
      console.log("Avatar Path: ", avatar);
      setAvatar(avatar);

      // save Token
      await AsyncStorage.setItem('token', token);

      setIsLoggedIn(true);
      return true;
    } catch (error) {
      console.log('Login error: ', error);
    }
    return false;
  };

  const uploadProfile = async (name, address, phone, avatar, dob) => {
    try {
      const body = {
        name: name,
        address: address,
        phone: phone,
        avatar: avatar,
        dob: dob,
      };
      const result = await AxiosInstance().post('/users/update-profile', body);
      return true;
    } catch (error) {
      console.log('Upload Profile got error: ', error);
    }
  };

  return (
    <UsersContext.Provider value={{isLoggedIn, login, register, uploadProfile, avatar}}>
      {children}
    </UsersContext.Provider>
  );
};
