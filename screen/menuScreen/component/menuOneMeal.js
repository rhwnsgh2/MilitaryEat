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
    marginTop: 10,
    borderBottomWidth: 1.5,
    borderColor: '#aaa',
    flex: 1,
  },
  menuTitle: {
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#aaa',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15,
  },
  menuTitleText: {
    fontSize: 18,
  },
});
