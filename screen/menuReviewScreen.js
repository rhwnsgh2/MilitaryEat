import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {MenuOneMeal} from './menuScreen';

const MenuReviewScreen = ({navigation, route}) => {
  console.log(route.params.props);

  return (
    <View style={styles.reviewContainer}>
      <MenuOneMeal
        menu={route.params.props.menu}
        meal={route.params.props.meal}
        key={route.params.props.key}
        navigation={navigation}
      />
    </View>
  );
};

export default MenuReviewScreen;

const styles = StyleSheet.create({
  reviewContainer: {
    marginTop: 10,
    borderBottomWidth: 1.5,
    borderColor: '#aaa',
    flex: 1,
  },
});
