import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCoffee, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import * as Storage from '../../api/localStorage';
import * as dateFormat from '../../api/dateFormat';
import {getMeal, postLike} from '../../api/external';
import {MenuOneMeal} from './component/menuOneMeal';
import {useSelector, useDispatch} from 'react-redux';
import {setMenu} from '../../redux/menuReducer';

const MenuScreen = ({navigation, route}) => {
  const [date, setDate] = useState(dateFormat.dateToString(new Date()));
  const reduxState = useSelector(state => state);
  const dispatch = useDispatch();
  let meal = {};
  let token = '';
  let liked = '';
  let matchOfDateMeal = {};
  let mealArray = [];
  meal = reduxState.menu.menu.meal;
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
        route={route}
        date={date}
      />
    );
  });
  if (AllMeal == undefined) {
    const asyncGetMeal = async () => {
      await getMeal(token, dateFormat.stringToDate(date)).then(
        response => {
          dispatch(setMenu(response.data));
        },
        error => {
          console.log(error);
        },
      );
    };
    asyncGetMeal();
  }
  return (
    <GestureRecognizer
      onSwipeLeft={state => {
        changeDate(+1);
      }}
      onSwipeRight={state => {
        changeDate(-1);
      }}>
      <View style={styles.date}>
        <Text>{dateFormat.stringDateToKorean(date)}</Text>
      </View>
      <View style={styles.mealItem}>{AllMeal}</View>
    </GestureRecognizer>
  );
};
export default MenuScreen;

export const MenuEach = props => {
  const reduxState = useSelector(state => state);
  const dispatch = useDispatch();
  const meal = props.id;
  const pressLike = async (mealId, menuId) => {
    let token = reduxState.token;
    await postLike(token, mealId, menuId).then(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      },
    );
    await getMeal(token, dateFormat.stringToDate(props.date)).then(
      response => {
        dispatch(setMenu(response.data));
      },
      reject => {
        console.log(reject);
      },
    );
  };

  const findMeal = () => {
    const meal = reduxState.menu.menu.meal.find(element => {
      if (element.date === props.date) {
        return true;
      }
    });
    let menu = {};
    for (const [key, value] of Object.entries(meal)) {
      if (value instanceof Object) {
        if (value.id === props.id) {
          menu = value;
        }
      }
    }
    let eachMenu = {};
    menu.menus.forEach(element => {
      if (element != undefined) {
        if (element.id == props.menu.id) {
          eachMenu = element;
          return;
        }
      }
    });
    return eachMenu;
  };
  let menu = findMeal();
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
      <TouchableOpacity
        style={styles.menuElementThumb}
        onPress={() => {
          pressLike(props.id, props.menu.id);
        }}>
        <Text style={styles.menuElementText}>{menu.like} </Text>
        <FontAwesomeIcon icon={faThumbsUp} size={15} />
      </TouchableOpacity>
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
