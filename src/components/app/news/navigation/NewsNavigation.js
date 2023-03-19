import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homepage1 from '../screens/Homepage1';
import Homepage2 from '../screens/Homepage2';
import Explore from '../screens/Explore';
import Bookmarks from '../screens/Bookmarks';
import Profile from '../screens/Profile';
import DetailHomePage from '../screens/DetailHomePage';
import CreateNews from '../screens/CreateNews';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditProfile from '../../users/screens/EditProfile';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomepageNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>

      <Tab.Screen name="Homepage1" component={Homepage1} />
      <Stack.Screen name="DetailNews" component={DetailHomePage} />
    </Stack.Navigator>
  );
};

const ProfileNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='YourProfile' component={Profile}/>
      <Stack.Screen name="CreateNews" component={CreateNews} />
      <Stack.Screen name='EditProfile' component={EditProfile}/>
    </Stack.Navigator>
  );
};

const NewsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name == 'HomePage') {
            if (!focused) {
              return (
                <Image
                  source={require('../../../../media/images/IconHome.png')}
                />
              );
            } else {
              return (
                <Image
                  source={require('../../../../media/images/IconHomePressed.png')}
                />
              );
            }
          } else if (route.name == 'Explore') {
            if (!focused) {
              return (
                <Image
                  source={require('../../../../media/images/IconExplore.png')}
                />
              );
            } else {
              return (
                <Image
                  source={require('../../../../media/images/IconExplorePressed.png')}
                />
              );
            }
          } else if (route.name == 'Bookmarks') {
            if (!focused) {
              return (
                <Image
                  source={require('../../../../media/images/IconBookmark.png')}
                />
              );
            } else {
              return (
                <Image
                  source={require('../../../../media/images/IconBookmarkPressed.png')}
                />
              );
            }
          } else if (route.name == 'Profile') {
            if (!focused) {
              return (
                <Image
                  source={require('../../../../media/images/IconProfile.png')}
                />
              );
            } else {
              return (
                <Image
                  source={require('../../../../media/images/IconProfilePressed.png')}
                />
              );
            }
          }
        },
        tabBarLabel: ({focused}) => {
          if (route.name == 'HomePage') {
            if (!focused) {
              return <Text>Home</Text>;
            } else {
              return <Text style={styles.tabBarLabelPressed}>Home</Text>;
            }
          } else if (route.name == 'Explore') {
            if (!focused) {
              return <Text>Explore</Text>;
            } else {
              return <Text style={styles.tabBarLabelPressed}>Explore</Text>;
            }
          } else if (route.name == 'Bookmarks') {
            if (!focused) {
              return <Text>Bookmarks</Text>;
            } else {
              return <Text style={styles.tabBarLabelPressed}>Bookmarks</Text>;
            }
          } else if (route.name == 'Profile') {
            if (!focused) {
              return <Text>Profile</Text>;
            } else {
              return <Text style={styles.tabBarLabelPressed}>Profile</Text>;
            }
          }
        },
        headerShown: false,
      })}>
      {/* <Tab.Screen name="Homepage1" component={Homepage1} /> */}
      {/* <Tab.Screen name="Detail" component={DetailNavigation} /> */}
      {/* <Tab.Screen name="CreateNews" component={CreateNews} /> */}
      <Tab.Screen name='HomePage' component={HomepageNavigation}/>
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name='Bookmarks' component={Bookmarks}/>
      <Tab.Screen name='Profile' component={ProfileNavigation}/>
      {/* <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="CreateNews" component={CreateNewsNavigation} /> */}
    </Tab.Navigator>
  );
};

export default NewsNavigation;

const styles = StyleSheet.create({
  tabBarLabelPressed: {
    color: '#1877F2',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
  },
});
