import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import TitleScreen from './../screen/title';

import MenuScreen from '../screen/menuScreen';
import BottomNavi from '../bottomNavigator/bottomNavi';

const Stack = createStackNavigator();

const StackNavi = () => {
  return (
    <Stack.Navigator initialRouteName="title">
      <Stack.Screen name="title" component={TitleScreen} />
      <Stack.Screen
        name="menu"
        component={BottomNavi}
        options={{
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavi;
