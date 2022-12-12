/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CountryCard from './Continents/CountryCard';
import DisplayConun from './Continents/DisplayConun';
import {useSelector, useDispatch} from 'react-redux';
import {getCountries} from '../redux/action/action';
const DetailPage = ({navigation}) => {
  const {countries} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topSearch}>
        <Image source={require('../../image/character.png')} />
        <View>
          <TextInput style={styles.searchBar} placeholder="Search..." />
          <Image
            style={styles.searchIcon}
            source={require('../../image/search_icon.png')}
          />
        </View>
      </View>
      <View style={styles.popularCoun}>
        <Text style={styles.title}>Popular</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={countries}
          renderItem={({item}) => {
            return <DisplayConun item={item} />;
          }}
          keyExtractor={item => item.id}
        />
      </View>
      <View>
        <View style={styles.titles}>
          <Text style={styles.title}>Countries</Text>
          <TouchableOpacity>
            <Text style={styles.txtBtn}>View all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <FlatList
            numColumns={2}
            data={countries}
            renderItem={({item}) => {
              return <CountryCard item={item} navigation={navigation} />;
            }}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
  topSearch: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  searchBar: {
    position: 'relative',
    width: 278,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#323643',
    padding: 10,
  },
  searchIcon: {
    position: 'absolute',
    margin: 10,
    right: 0,
  },
  titles: {
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    color: ' #323643',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 20,
  },
  txtBtn: {
    marginTop: 20,
    color: ' #323643',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
  },
});
