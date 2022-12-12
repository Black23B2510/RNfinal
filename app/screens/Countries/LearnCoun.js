import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const LearnCoun = () => {
  const route = useRoute();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.name}>{route.params.name}</Text>
      <View style={styles.location}>
        <Text style={styles.title}>Location</Text>
        <Text style={styles.desc}>{route.params.location}</Text>
        <Image style={styles.img} source={{uri: route.params.imgLo}} />
      </View>
      <View style={styles.traCos}>
        <Text style={styles.title}>Traditional costume</Text>
        <Text style={styles.desc}>{route.params.traCostume}</Text>
        <Image style={styles.img} source={{uri: route.params.imgTra}} />
      </View>
      <View style={styles.cuisine}>
        <Text style={styles.title}>Cuisine</Text>
        <Text style={styles.desc}>{route.params.cuisine}</Text>
        <Image style={styles.img} source={{uri: route.params.imgCui}} />
      </View>
    </ScrollView>
  );
};

export default LearnCoun;

const styles = StyleSheet.create({
  name: {
    padding: 20,
    color: '#5FAD41',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 20,
    textAlign: 'center',
  },
  title: {
    marginLeft: 20,
    color: '#323643',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 20,
  },
  desc: {
    marginLeft: 20,
    marginRight: 20,
    color: '#323643',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
  },
  img: {
    margin: 20,
    width: 370,
    height: 370,
  },
});
