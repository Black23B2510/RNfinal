import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const CountryCard = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Learning page', item);
      }}
      style={styles.card}>
      <Image style={styles.img} source={{uri: item.flag}} />
      <Text style={styles.nameCoun}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default CountryCard;

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    alignItems: 'center',
    width: 157,
    height: 128,
    margin: 20,
    backgroundColor: '#5FAD41',
    borderWidth: 1,
    borderColor: '#5FAD41',
    borderRadius: 10,
  },
  img: {
    marginTop: 10,
    width: 130,
    height: 81,
  },
  nameCoun: {
    color: '#323643',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    padding: 5,
  },
});
