import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import TitleScreen from './../screen/title';
import {NavigationContainer} from '@react-navigation/native';
import MenuScreen from '../screen/menuScreen';

const Stack = createStackNavigator(
  {
    title: TitleScreen,
    menu: MenuScreen,
  },
  {
    initialRouteName: 'title',
  },
);

// const Container = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="title" component={TitleScreen} />
//         <Stack.Screen name="menu" component={MenuScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

export default createAppContainer(Stack);
