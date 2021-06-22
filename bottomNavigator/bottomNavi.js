import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import StackNaviInBottom from './stackNavi';
import RankScreen from '../screen/menuRankScreen';

const BottomTab = createBottomTabNavigator();

const BottomNavi = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Menu" component={StackNaviInBottom} />
      <BottomTab.Screen name="Rank" component={RankScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomNavi;
