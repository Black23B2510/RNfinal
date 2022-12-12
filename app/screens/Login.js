import React, {useState} from 'react';
import axios from 'axios';
import {BASE_URL} from '../components/config';
import {
  Alert,
  Dimensions,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const checkLogin = (name, pwd, navigation) => {
  // axios
  //   .post(`${BASE_URL}/users`, {
  //     username: name,
  //     password: pwd,
  //   })
  //   .then(res => {
  //     console.log(res.data);
  //     Alert.alert('Login successfully');
  //     navigation.reset({
  //       index: 0,
  //       routes: [{name: 'Main'}],
  //     });
  //   })
  //   .catch(e => {
  //     Alert.alert('Login error!');
  //     console.log(e);
  //   });
  if (name === 'denden' && pwd === 'denden123') {
    navigation.reset({
      index: 0,
      routes: [{name: 'Main'}],
    });
    Keyboard.dismiss();
  } else if (name === '' && pwd === '') {
    Alert.alert('Please enter required fields');
  } else {
    Alert.alert('Your email or your password is wrong.');
  }
};
const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.wraper}>
      <View style={styles.topContent}>
        <Image style={styles.icon} source={require('../../image/banner.jpg')} />
        <Text style={styles.txt}>Hi Student</Text>
        <Text style={styles.reTxt}>Login to continue</Text>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.container}>
          <View style={styles.name}>
            <Text style={styles.tlt}>Username</Text>
            <TextInput
              style={styles.txtInput}
              placeholder="Enter your username"
              onChangeText={username => setUsername(username)}
              value={username}
            />
          </View>
          <View style={styles.pwd}>
            <Text style={styles.tlt}>Password</Text>
            <TextInput
              secureTextEntry={true}
              onChangeText={password => setPassword(password)}
              value={password}
              style={styles.txtInput}
              placeholder="Enter your password"
            />
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => checkLogin(username, password, navigation)}>
            <Text style={styles.txtBtn}>Log in</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.or}>Or</Text>
            <Image
              style={styles.socialIcon}
              source={require('../../image/socialIcon.png')}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{name: 'Register'}],
                });
              }}>
              <Text style={styles.txtRe}>Not a member? Register now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  wraper: {
    width: windowWidth,
    height: windowHeight,
    // flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#5FAD41',
  },
  topContent: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 20,
    height: '30%',
    // flex: 1,
  },
  icon: {
    marginLeft: 25,
    width: 350,
    height: 150,
  },
  txt: {
    padding: 10,
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 20,
    color: '#FFFFFF',
  },
  reTxt: {
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: '#FFFFFF',
  },
  mainContent: {
    marginTop: 10,
    width: '100%',
    height: '70%',
    borderRadius: 15,
    backgroundColor: '#F3F4F9',
    // flex: 1,
  },
  container: {
    marginTop: 27,
    padding: 10,
  },
  tlt: {
    padding: 10,
    color: 'A5A5A5',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
  },
  txtInput: {
    fontSize: 16,
    padding: 10,
    borderColor: 'A5A5A5',
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 200,
    height: 35,
    margin: 30,
    backgroundColor: '#5FAD41',
    borderWidth: 1,
    borderColor: '#5FAD41',
    borderRadius: 5,
  },
  txtBtn: {
    textAlign: 'center',
    padding: 5,
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
  },
  or: {
    padding: 20,
    textAlign: 'center',
    color: '#323643',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
  },
  txtRe: {
    padding: 10,
    color: '#5FAD41',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '400',
  },
  socialIcon: {
    marginLeft: 25,
  },
});
