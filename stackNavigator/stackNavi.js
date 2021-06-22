import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import TitleScreen from './../screen/title';

import BottomNavi from '../bottomNavigator/bottomNavi';

const Stack = createStackNavigator();

const StackNavi = () => {
  const [token, setToken] = useState('');
  const changeToken = tokenData => {
    setToken(tokenData);
  };
  return (
    <Stack.Navigator
      initialRouteName="title"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="title"
        component={TitleScreen}
        initialParams={{
          token: token,
        }}
      />
      <Stack.Screen
        name="menu"
        component={BottomNavi}
        options={{
          headerLeft: null,
        }}
        initialParams={{
          token: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavi;
