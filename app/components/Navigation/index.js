import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import Homepage from '../../screens/Homepage';
import DetailPage from '../../screens/DetailPage';
import BottomTabs from '../BottomTabs';
import LearnCoun from '../../screens/Countries/LearnCoun';

const Stack = createNativeStackNavigator();

const MyNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_bottom',
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerStyle: {backgroundColor: 'salmon'},
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Main"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Homepage"
        component={Homepage}
        options={{
          headerStyle: {backgroundColor: 'salmon'},
        }}
      />
      <Stack.Screen
        name="Asia"
        component={DetailPage}
        options={{
          headerStyle: {backgroundColor: 'salmon'},
        }}
      />
      <Stack.Screen
        name="Learning page"
        component={LearnCoun}
        options={{
          headerStyle: {backgroundColor: 'salmon'},
        }}
      />
    </Stack.Navigator>
  );
};

export default MyNavigation;

const styles = StyleSheet.create({});
