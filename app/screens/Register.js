import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import {BASE_URL} from '../components/config';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const checkRegister = (name, phone, pwd, navigation) => {
  axios
    .post(`${BASE_URL}/users`, {
      username: name,
      phonenumber: phone,
      password: pwd,
    })
    .then(res => {
      console.log(res.data);
      Alert.alert('Register sucsessfully');
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    })
    .catch(e => {
      Alert.alert('Register failed!');
      console.log(e);
    });
};
const Register = ({navigation}) => {
  const [username, setUsername] = useState(null);
  const [phonenumber, setPhonenumber] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <View style={styles.wraper}>
      <View style={styles.topContent}>
        <Image
          style={styles.icon}
          source={require('../../image/firstpage.png')}
        />
        <Text style={styles.txt}>Hi Student</Text>
        <Text style={styles.reTxt}>Register to continue</Text>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.container}>
          <View style={styles.name}>
            <Text style={styles.tlt}>Username</Text>
            <TextInput
              value={username}
              onChangeText={usename => setUsername(usename)}
              style={styles.txtInput}
              placeholder="Enter your username"
            />
          </View>
          <View style={styles.phone}>
            <Text style={styles.tlt}>Phone number</Text>
            <TextInput
              style={styles.txtInput}
              placeholder="Enter your phone number"
              value={phonenumber}
              onChangeText={phone => setPhonenumber(phone)}
            />
          </View>
          <View style={styles.pwd}>
            <Text style={styles.tlt}>Password</Text>
            <TextInput
              style={styles.txtInput}
              placeholder="Enter your password"
              value={password}
              onChangeText={pwd => setPassword(pwd)}
            />
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              checkRegister(username, phonenumber, password, navigation);
            }}
            style={styles.btn}>
            <Text style={styles.txtBtn}>Register</Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{name: 'Login'}],
                });
              }}>
              <Text style={styles.orr}>Already have an account?</Text>
            </TouchableOpacity>
            <Text style={styles.or}>Or</Text>
            <Image
              style={styles.socialIcon}
              source={require('../../image/socialIcon.png')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Register;

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
    width: 152,
    height: 169,
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
    marginTop: 10,
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
  orr: {
    textAlign: 'center',
    color: '#323643',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
  },
  socialIcon: {
    marginLeft: 25,
  },
});
