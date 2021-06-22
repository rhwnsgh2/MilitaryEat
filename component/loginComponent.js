import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as api from '../api/external';
import * as Storage from '../api/localStorage';
import {setMenu} from '../redux/menuReducer';
import {setToken} from '../redux/tokenReducer';

const LoginComponent = props => {
  const reduxState = useSelector(state => state);
  const dispatch = useDispatch();
  const loginPress = () => {
    let [id, pw] = props.loginPress();
    console.log(id, pw);
    let errorCode = 0;
    api.postLogin(id, pw).then(
      response => {
        let token = response.headers.authorization;
        props.navigation.setParams({
          token: token,
        });
        api.getMeal(token, new Date()).then(
          response1 => {
            let obj = {
              token: token,
              meal: response1.data,
            };
            dispatch(setMenu(response1.data));
            dispatch(setToken(token));
            Storage._saveDataObject(JSON.stringify(obj));
            props.navigation.navigate('menu', {
              screen: 'Menu',
            });
          },
          error1 => {
            console.log(error1);
          },
        );
      },
      error => {
        console.log(error.response.status);
        errorCode = error.response.status;
        console.log(errorCode);
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
