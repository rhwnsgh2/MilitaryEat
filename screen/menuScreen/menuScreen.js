import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCoffee, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import * as Storage from '../../api/localStorage';
import * as dateFormat from '../../api/dateFormat';
import {getMeal, postLike} from '../../api/external';
import {MenuOneMeal} from './component/menuOneMeal';
import {useSelector, useDispatch} from 'react-redux';
import {setMenu} from '../../redux/menuReducer';
import Toast, {DURATION} from 'react-native-easy-toast';
import {thisTypeAnnotation} from '@babel/types';
import Icon from 'react-native-vector-icons/Ionicons';

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
  if (AllMeal.length == 0) {
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
      }}
      style={{flex: 1, backgroundColor: '#E8F2DB'}}>
      <View style={styles.containerAppBar}>
        <Image
          style={styles.logoImage}
          resizeMode="contain"
          source={require('../../img/logo.png')}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontSize: 20}}>김병장님,</Text>
          <Text style={{fontSize: 20}}>식사시간입니다.</Text>
        </View>
      </View>

      <View style={styles.mealItem}>
        <View style={styles.date}>
          <Text style={styles.dateText}>
            {dateFormat.stringDateToKorean(date)}
          </Text>
        </View>
        {AllMeal}
      </View>
    </GestureRecognizer>
  );
};
export default MenuScreen;

export const MenuEach = props => {
  const reduxState = useSelector(state => state);
  const dispatch = useDispatch();
  const meal = props.id;
  const pressLike = async (mealId, menuId) => {
    let token = reduxState.token.token;
    await postLike(token, mealId, menuId).then(
      response => {
        console.log(response);
      },
      error => {
        if (error.response.status === 403) {
          console.log('admin');
        }
      },
    );
    await getMeal(token, dateFormat.stringToDate(props.date)).then(
      response => {
        dispatch(setMenu(response.data));
      },
      error => {
        console.log(error);
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
          adjustsFontSizeToFit
          style={styles.menuElementText}>
          {props.menu.name}
        </Text>
      </View>
      <View style={styles.menuElementCalory}>
        <Text style={styles.menuKcalText}>
          {Math.floor(props.menu.kcal)} kcal
        </Text>
      </View>
      <TouchableOpacity
        style={styles.menuElementThumb}
        onPress={() => {
          pressLike(props.id, props.menu.id);
        }}>
        <View style={styles.likeView}>
          <Text style={styles.likeText}>{menu.like}</Text>
          <Icon name="heart" size={15} color={'#F2706F'} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    marginTop: 10,
    borderBottomWidth: 1.5,
    borderColor: 'white',
    flex: 1,
    backgroundColor: '#E8F2DB',
  },
  menuEach: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  mealItem: {
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,

    borderColor: 'white',
    backgroundColor: '#E8F2DB',
    flex: 1,
  },

  menuElementName: {
    flex: 5,
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  menuElementCalory: {
    flex: 4,
    alignItems: 'flex-start',
  },
  menuElementThumb: {
    flex: 2,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  menuElementText: {
    fontSize: 16,
  },
  menuKcalText: {
    fontSize: 12,
  },
  date: {
    marginLeft: 20,
    marginBottom: 5,
  },
  likeView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  likeText: {
    fontSize: 13,
    marginRight: 10,
  },
  containerAppBar: {
    flex: 0.1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 10,
  },
  logoImage: {
    width: 50,
    height: 50,
  },
  dateText: {
    fontSize: 15,
  },
});
