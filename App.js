import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MyNavigation from './app/components/Navigation';
import {Provider} from 'react-redux';
import {Store} from './app/redux/store/store';

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <MyNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
