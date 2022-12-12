import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homepage from '../screens/Homepage';
import Setting from '../screens/Setting/Setting';
import Auth from '../screens/Auth/Auth';
import Chat from '../screens/Chat/Chat';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'salmon',
        headerShown: false,
      }}
      labelStyle={{fontSize: 12}}
      style={{backgroundColor: 'salmon'}}>
      <Tab.Screen
        name="Home"
        component={Homepage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../image/home.webp')}
              style={{width: 26, height: 26, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Chat}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../image/map.png')}
              style={{width: 26, height: 26, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Auth}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../image/profile.png')}
              style={{width: 26, height: 26, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../image/setting.png')}
              style={{width: 26, height: 26, tintColor: color}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
