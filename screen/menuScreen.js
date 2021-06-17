import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCoffee, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import * as Stoarge from '../api/localStorage';
import * as dateFormat from '../api/dateFormat';

const testObject = {
  name: '쌀밥',
  kcal: '100',
  like: '10',
};

const menuList = [];

for (let i = 0; i < 7; i++) {
  menuList.push(testObject);
}

const MenuScreen = ({navigation, route}) => {
  const [date, setDate] = useState(dateFormat.dateToString(new Date()));
  const [obj, setObj] = useState('');
  const [loading, setLoading] = useState(false);
  let meal = {};
  let token = '';
  let liked = '';
  let matchOfDateMeal = {};
  let mealArray = [];
  navigation.setOptions({title: 'TEST'});
  if (obj != '') {
    token = obj.token;
    meal = obj.meal.meal;
    liked = obj.meal.liked;
    matchOfDateMeal = meal.find(element => {
      if (element.date === date) {
        return true;
      }
    });
    if (matchOfDateMeal != undefined) {
      for (const [key, value] of Object.entries(matchOfDateMeal)) {
        if (['breakfast', 'lunch', 'dinner'].indexOf(key) != -1) {
          mealArray.push(value);
        }
      }
    }
  }
  useEffect(() => {
    const loadData = async () => {
      let data = JSON.parse(await Stoarge._loadData('obj'));
      setObj(data);
      setLoading(true);
    };
    loadData();
  }, []);

  const changeDate = direction => {
    let tmpDate = dateFormat.stringToDate(date);
    tmpDate.setDate(tmpDate.getDate() + direction);
    setDate(dateFormat.dateToString(tmpDate));
  };

  const AllMeal = mealArray.map((mealOne, index) => {
    const arrayMeal = ['조식', '중식', '석식'];
    return (
      <MenuOneMeal
        menu={mealOne.menus}
        meal={arrayMeal[index]}
        id={mealOne.id}
        key={index}
        navigation={navigation}
      />
    );
  });

  if (loading) {
    return (
      <GestureRecognizer
        onSwipeLeft={state => {
          changeDate(-1);
        }}
        onSwipeRight={state => {
          changeDate(+1);
        }}>
        <View style={styles.date}>
          <Text>{dateFormat.stringDateToKorean(date)}</Text>
        </View>
        <View style={styles.mealItem}>{AllMeal}</View>
      </GestureRecognizer>
    );
  } else {
    return <View />;
  }

  // const AllMeal = ['조식', '중식', '석식'].map((meal, index) => {
  //   return <MenuOneMeal menu={menuList} meal={meal} key={index} />;
  // });
};
export default MenuScreen;

export const MenuOneMeal = props => {
  let total = props.menu.map((menu, index) => {
    return <MenuEach key={index} menu={menu} />;
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

export const MenuEach = props => {
  return (
    <View style={styles.menuEach}>
      <View style={styles.menuElementName}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.menuElementText}>
          {props.menu.name}
        </Text>
      </View>
      <View style={styles.menuElementCalory}>
        <Text style={styles.menuElementText}>
          {Math.floor(props.menu.kcal)} kcal
        </Text>
      </View>
      <View style={styles.menuElementThumb}>
        <Text style={styles.menuElementText}>{props.menu.like} </Text>
        <FontAwesomeIcon icon={faThumbsUp} size={15} />
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
    flex: 1,
  },
  mealItem: {
    borderWidth: 2,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,

    borderColor: '#aaa',
    height: '96%',
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
    flex: 6,
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  menuElementCalory: {
    flex: 2,
    alignItems: 'flex-start',
  },
  menuElementThumb: {
    flex: 2,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  menuElementText: {},
  date: {
    marginLeft: 20,
    flex: 1,
  },
});
