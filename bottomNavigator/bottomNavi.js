import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import StackNaviInBottom from './stackNavi';
import RankScreen from '../screen/menuRankScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomTab = createBottomTabNavigator();

const BottomNavi = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === '랭킹') {
            iconName = focused ? 'trophy' : 'trophy-outline';
          } else if (route.name === '메뉴') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}>
      <BottomTab.Screen name="메뉴" component={StackNaviInBottom} />
      <BottomTab.Screen name="랭킹" component={RankScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomNavi;
