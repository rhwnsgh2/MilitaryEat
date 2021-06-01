import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const LoginComponent = props => {
  const loginPress = () => {
    let [id, pw] = props.loginPress();
    console.log(id, pw);

    loginApi(id, pw).then(result => {
      console.log(result);
      if (result === 'Success') {
        props.navigation.navigate('menu');
      }
    });
  };

  const loginApi = (id, pw) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Success'), 2000);
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={loginPress}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginComponent;
