import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../../ASM/Login';
import Register from '../../ASM/Register';
import Homepage1 from '../news/screens/Homepage1';
import Explore from '../news/screens/Explore';
import Bookmarks from '../news/screens/Bookmarks';
import Profile from '../news/screens/Profile';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name == 'Home') {
            if (!focused) {
              return (
                <Image
                  source={require('../../../media/images/IconHome.png')}
                />
              );
            } else {
              return (
                <Image
                  source={require('../../../media/images/IconHomePressed.png')}
                />
              );
            }
          } else if (route.name == 'Explore') {
            if (!focused) {
              return (
                <Image
                  source={require('../../../media/images/IconExplore.png')}
                />
              );
            } else {
              return (
                <Image
                  source={require('../../../media/images/IconExplorePressed.png')}
                />
              );
            }
          } else if (route.name == 'Bookmarks') {
            if (!focused) {
              return (
                <Image
                  source={require('../../../media/images/IconBookmark.png')}
                />
              );
            } else {
              return (
                <Image
                  source={require('../../../media/images/IconBookmarkPressed.png')}
                />
              );
            }
          } else if (route.name == 'Profile') {
            if (!focused) {
              return (
                <Image
                  source={require('../../../media/images/IconProfile.png')}
                />
              );
            } else {
              return (
                <Image
                  source={require('../../../media/images/IconProfilePressed.png')}
                />
              );
            }
          }
        },
        tabBarLabel: ({focused}) => {
          if (route.name == 'Home') {
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
      <Tab.Screen name="Home" component={Homepage1} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Bookmarks" component={BookMarks} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  tabBarLabelPressed: {
    color: '#1877F2',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
  },
});
