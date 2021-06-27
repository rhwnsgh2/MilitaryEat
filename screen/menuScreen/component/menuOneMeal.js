import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {MenuEach} from '../menuScreen';
export const MenuOneMeal = props => {
  let total = props.menu.map((menu, index) => {
    return <MenuEach key={index} menu={menu} id={props.id} date={props.date} />;
  });

  if (props.review) {
    return (
      <View style={styles.menuContainer}>
        <View style={styles.menuTitle}>
          <Text style={styles.menuTitleText}>{props.meal}</Text>
        </View>

        {total}
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('menuReview', {
            props: props,
          });
        }}
        style={styles.menuContainer}>
        <View style={styles.menuTitle}>
          <Text style={styles.menuTitleText}>{props.meal}</Text>
        </View>

        {total}
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  menuContainer: {
    margin: 10,
    marginTop: 0,
    padding: 10,
    borderWidth: 3,
    borderColor: '#F0EBE9',
    flex: 1,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  menuTitle: {
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#F0EBE9',
    marginLeft: 10,
    marginRight: 5,
    marginBottom: 5,
  },
  menuTitleText: {
    fontSize: 15,
  },
});
