import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MenuScreen from '../screen/menuScreen';
import {NavigationContainer} from '@react-navigation/native';

const BottomTab = createBottomTabNavigator();

const BottomNavi = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Menu" component={MenuScreen} />
      <BottomTab.Screen name="Rank" component={MenuScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomNavi;
