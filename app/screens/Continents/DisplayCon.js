import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';

const DisplayCon = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Asia');
      }}
      style={styles.continent}>
      <Image style={styles.img} source={{uri: item.img}} />
      <View style={styles.titles}>
        <Text style={styles.name}>{item.name} </Text>
        <Text style={styles.desc}>{item.numCon} countries and regions</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DisplayCon;

const styles = StyleSheet.create({
  continent: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#5FAD41',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },
  titles: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 50,
  },
  img: {
    width: 68,
    height: 60,
  },
  name: {
    color: '#323643',
    fontSize: 20,
    lineHeight: 20,
    fontWeight: '500',
  },
  desc: {
    color: '#323643',
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '400',
  },
});
