import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StackNavi from './stackNavigator/stackNavi';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavi />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
