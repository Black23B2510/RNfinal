import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FirstPage = () => {
  return (
    <View style={styles.wraper}>
      <Text style={styles.title}>G-Learning</Text>
      <Image source={require('../../image/firstpage.png')} />
      <Text style={styles.bottomName}>Black Moon</Text>
    </View>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  wraper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#5FAD41',
    width: windowWidth,
    height: windowHeight,
  },
  title: {
    paddingTop: 20,
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '700',
    lineHeight: 20,
  },
  bottomName: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 20,
    bottom: 0,
  },
});
