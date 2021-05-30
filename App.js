import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StackNavi from './stackNavigator/stackNavi';

export default function App() {
  return <StackNavi />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
