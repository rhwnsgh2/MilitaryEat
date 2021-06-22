import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import MenuReviewScreen from '../screen/menuReview/menuReviewScreen';
import MenuScreen from '../screen/menuScreen/menuScreen';

const Stack = createStackNavigator();

const StackNaviInBottom = () => {
  return (
    <Stack.Navigator
      initialRouteName="menu"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="menu" component={MenuScreen} />
      <Stack.Screen name="menuReview" component={MenuReviewScreen} />
    </Stack.Navigator>
  );
};

export default StackNaviInBottom;
