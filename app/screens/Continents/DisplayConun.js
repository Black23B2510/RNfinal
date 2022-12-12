import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const DisplayConun = ({item}) => {
  return (
    <TouchableOpacity style={styles.cardCoun}>
      <Image style={styles.img} source={{uri: item.flag}} />
      <Text style={styles.nameCoun}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default DisplayConun;

const styles = StyleSheet.create({
  cardCoun: {
    paddingTop: 25,
    paddingLeft: 25,
  },
  img: {
    width: 104,
    height: 66,
  },
  nameCoun: {
    paddingTop: 5,
    textAlign: 'center',
    color: '#323643',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
  },
});
