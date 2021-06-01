import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const testObject = {
  name: '쌀밥',
  kcal: '100',
  like: '10',
};

const menuList = [];

for (let i = 0; i < 7; i++) {
  menuList.push(testObject);
}

const MenuScreen = ({navigation}) => {
  const AllMeal = ['조식', '중식', '석식'].map((meal, index) => {
    return <MenuOneMeal menu={menuList} meal={meal} key={index} />;
  });
  return (
    <View>
      <Text> 메뉴화면 </Text>

      {AllMeal}
      <Button title="test" onPress={() => navigation.navigate('title')} />
    </View>
  );
};
export default MenuScreen;

const MenuOneMeal = props => {
  let total = props.menu.map((menu, index) => {
    return <MenuEach key={index} menu={menu} />;
  });
  return (
    <View>
      <Text>{props.meal}</Text>
      {total}
    </View>
  );
};

const MenuEach = props => {
  return (
    <View style={styles.menuEach}>
      <Text>{props.menu.name}</Text>
      <Text>{props.menu.kcal} kcal</Text>
      <Text>{props.menu.like}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  menuEach: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
