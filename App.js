import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StackNavi from './stackNavigator/stackNavi';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as StoreProvider} from 'react-redux';
import store from './redux/redux.js';

export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <StackNavi />
      </NavigationContainer>
    </StoreProvider>
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
