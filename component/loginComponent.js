import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as api from '../api/external';

const LoginComponent = props => {
  const loginPress = () => {
    let [id, pw] = props.loginPress();
    console.log(id, pw);

    api.postLogin(id, pw).then(
      response => {
        let token = response.data;
        props.navigation.setParams({
          token: token,
        });
        console.log(props.route.params.token);
        return token;
      },
      error => {
        console.log(error.response.status);
        return error.response.status;
      },
    );
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
