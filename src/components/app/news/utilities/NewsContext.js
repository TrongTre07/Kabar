import {View, Text} from 'react-native';
import React, {createContext, useContext} from 'react';
import AxiosInstance from '../../axiosClient/AxiosInstance';

export const NewsContext = createContext();
export const NewsProvider = props => {
  const {children} = props;

  const getNews = async () => {
    try {
      const result = await AxiosInstance().get('/articles');
      return result.data;
    } catch (error) {
      console.log('Get News Error: ', error);
    }
    return [];
  };

  const getDetailNews = async id => {
    try {
      const result = await AxiosInstance().get(`/articles/${id}/detail`);
      return result.data[0];
    } catch (error) {
      console.log('Get News Error: ', error);
    }
    return null;
  };

  const uploadImage = async (form) => {
    try {
      const result = await AxiosInstance('multipart/form-data').post(
        '/media/upload', form
      );
      return result.data;
    } catch (error) {
      console.log("Upload Image:", error);
    }
  };

  const addNews = async (title, content, image) =>{
    try {
        const body ={
            title,
            content,
            image
        }
        const reuslt = await AxiosInstance().post('/articles', body)
        return true;
    } catch (error) {
        console.log("Add news: ", error)
    }
  }

  const deleteNews = async (id) =>{
    try {
      await AxiosInstance().delete(`articles/${id}/delete`);
      return true
    } catch (error) {
      console.log("Delete got error: ", error);
    }
  }

  return (
    <NewsContext.Provider value={{getNews, getDetailNews, uploadImage, addNews, deleteNews}}>
      {children}
    </NewsContext.Provider>
  );
};
