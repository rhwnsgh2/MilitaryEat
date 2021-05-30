import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const MenuScreen = ({navigation}) => {
  return (
    <View>
      <Text> 메뉴화면 </Text>
      <Button title="test" onPress={() => navigation.navigate('title')} />
    </View>
  );
};
export default MenuScreen;
