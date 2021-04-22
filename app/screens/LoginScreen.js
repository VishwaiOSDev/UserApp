import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';

import LoginApi from '../api/api';
import Screen from '../components/Screen';
import colors from '../config/colors';

function LoginScreen({navigation}) {
  const [isEmail, setIsEmail] = useState('');
  const [isPassword, setIsPassword] = useState('');

  const sendLoginRequest = async () => {
    try {
      const data = {
        email: isEmail,
        password: isPassword,
      };

      const response = await LoginApi.post('/user/login', data);
      navigation.navigate('Home');
      //Delete the Navigation Stack
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Screen style={styles.container}>
      <Text style={styles.text}>Log in to get started</Text>
      <Text style={[styles.text, {marginTop: 10, marginBottom: 30}]}>
        Experience the all new App!
      </Text>
      <View style={{alignItems: 'flex-end'}}>
        <AppTextInput
          title="E-mail ID"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => setIsEmail(text)}
          value={isEmail}
          image={require('../assets/email-24px.png')}
        />
        <AppTextInput
          title="Password"
          image={require('../assets/lock.png')}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => setIsPassword(text)}
          value={isPassword}
        />
        <Text
          style={{color: colors.yellow, fontWeight: '600', marginVertical: 20}}>
          Use Mobile Number
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={sendLoginRequest} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignSelf: 'center',
  },

  container: {
    padding: 20,
  },
  text: {
    fontSize: 18,
    color: colors.darkGrey,
  },
});

export default LoginScreen;
