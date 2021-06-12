import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCoffee, faThumbsUp} from '@fortawesome/free-solid-svg-icons';

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
  const [date, setDate] = useState(new Date());
  console.log('EASRSE');
  const changeDate = direction => {
    let tmpDate = new Date(date);
    tmpDate.setDate(date.getDate() + 1);
    setDate(tmpDate);
  };
  const AllMeal = ['조식', '중식', '석식'].map((meal, index) => {
    return <MenuOneMeal menu={menuList} meal={meal} key={index} />;
  });
  return (
    <GestureRecognizer
      onSwipeLeft={state => {
        changeDate(-1);
      }}
      onSwipeRight={state => {
        changeDate(+1);
      }}>
      <View style={styles.mealItem}>{AllMeal}</View>
    </GestureRecognizer>
  );
};
export default MenuScreen;

const MenuOneMeal = props => {
  let total = props.menu.map((menu, index) => {
    return <MenuEach key={index} menu={menu} />;
  });
  return (
    <View style={styles.menuContainer}>
      <View style={styles.menuTitle}>
        <Text style={styles.menuTitleText}>{props.meal}</Text>
      </View>
      {total}
    </View>
  );
};

const MenuEach = props => {
  return (
    <View style={styles.menuEach}>
      <View style={styles.menuElementName}>
        <Text style={styles.menuElementText}>{props.menu.name}</Text>
      </View>
      <View style={styles.menuElementCalory}>
        <Text style={styles.menuElementText}>{props.menu.kcal} kcal</Text>
      </View>
      <View style={styles.menuElementThumb}>
        <FontAwesomeIcon icon={faThumbsUp} size={10} />
        <Text style={styles.menuElementText}>{props.menu.like}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    marginTop: 10,
    borderBottomWidth: 1.5,
    borderColor: '#aaa',
    flex: 1,
  },
  menuEach: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: 10,
    flex: 1,
  },
  mealItem: {
    borderWidth: 2,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,

    borderColor: '#aaa',
    height: '99%',
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
  menuElementName: {
    flex: 3,
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  menuElementCalory: {
    flex: 2,
    alignItems: 'flex-start',
  },
  menuElementThumb: {
    flex: 3,
    marginRight: 40,
    alignItems: 'flex-end',
  },
  menuElementText: {},
});
