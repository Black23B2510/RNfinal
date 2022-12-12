import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DisplayCon from './Continents/DisplayCon';

const Homepage = ({navigation}) => {
  const [continents, setContinents] = useState({
    isLoading: true,
    data: [],
  });

  const getListCon = () => {
    const apiURl = 'https://636e1a5eb567eed48ad32882.mockapi.io/continents';
    axios.get(apiURl).then(response => {
      setContinents({
        isLoading: false,
        data: response.data,
      });
    });
  };
  useEffect(() => {
    getListCon();
  }, []);
  return (
    <ScrollView style={styles.container}>
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
      <View style={styles.earth}>
        <Image source={require('../../image/earth.png')} />
      </View>
      <View style={styles.mainContent}>
        <View style={styles.groupTitle}>
          <Text style={styles.title}>Continents</Text>
          <TouchableOpacity>
            <Text>View all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={continents.data}
          renderItem={({item}) => {
            return <DisplayCon item={item} navigation={navigation} />;
          }}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
};

export default Homepage;

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
  earth: {
    marginTop: 30,
    alignItems: 'center',
  },
  searchIcon: {
    position: 'absolute',
    margin: 10,
    right: 0,
  },
  mainContent: {
    margin: 25,
  },
  groupTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    paddingTop: 10,
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 20,
  },
  continent: {
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
});
