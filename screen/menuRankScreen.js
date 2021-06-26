import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import RankItem from '../component/rankComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {getRank} from './../api/external';
import * as dateFormat from './../api/dateFormat';

export default function RankScreen() {
  const reduxState = useSelector(state => state);
  const [rank, setRank] = useState([]);
  useEffect(() => {
    const asyncGetRank = async () => {
      await getRank(reduxState.token, new Date()).then(
        response => {
          setRank(response.data.data);
        },
        error => {
          console.log(error);
        },
      );
    };
    asyncGetRank();
  }, []);

  const rankComponent = () => {
    let component = <View />;
    if (rank.length > 2) {
      const newArray = rank.slice(3);
      component = newArray.map((menu, index) => {
        return (
          <RankItem
            menu={menu.menu}
            like={menu.like}
            rank={menu.rank}
            key={index}
          />
        );
      });
    }
    return component;
  };
  const dateText = () => {
    const date = new Date();
    const year = dateFormat.year(date);
    const month = dateFormat.month(date);
    const week = dateFormat.week(date);
    console.log(year, month, week);
    return String(year).substr(2, 3) + '년 ' + month + '월 ' + week + '주차';
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerAppBar}>
        <Image
          style={styles.logoImage}
          resizeMode="contain"
          source={require('../img/logo.png')}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontSize: 20}}>김병장님,</Text>
          <Text style={{fontSize: 20}}>식사시간입니다.</Text>
        </View>
      </View>
      <View style={{alignSelf: 'flex-start', marginLeft: 20}}>
        <Text style={{fontSize: 20}}>{dateText()}</Text>
      </View>
      <View style={styles.containerTop}>
        <View style={styles.containerTopItem}>
          <View style={styles.containerTopItemSide}>
            <GradeHead grade="2" color="#A09F9F" />
            <View
              style={{
                flex: 0.8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="trophy"
                size={40}
                color={'gold'}
                style={{marginTop: 10}}
              />
              <Text
                style={styles.topItemSideText}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                {rank.length > 1 ? rank[1].menu : ''}
              </Text>
              <View style={styles.likeView}>
                <Icon name="heart" size={20} color={'#F2706F'} />
                <Text style={styles.likeViewText}>
                  {rank.length > 1 ? rank[1].like : 0}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.containerTopItem}>
          <View style={styles.containerTopItemCenter}>
            <GradeHead grade="1" color="#F1EA49" />
            <View
              style={{
                flex: 0.8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="trophy"
                size={45}
                color={'gold'}
                style={{marginTop: 15}}
              />
              <Text
                style={styles.topItemCenterText}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                {rank.length > 0 ? rank[0].menu : ''}
              </Text>
              <View style={styles.likeView}>
                <Icon name="heart" size={20} color={'#F2706F'} />
                <Text style={styles.likeViewText}>
                  {rank.length > 0 ? rank[0].like : ''}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.containerTopItem}>
          <View style={styles.containerTopItemSide}>
            <GradeHead grade="3" color="#DD9E38" />
            <View
              style={{
                flex: 0.8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="trophy"
                size={40}
                color={'gold'}
                style={{marginTop: 10}}
              />
              <Text
                style={styles.topItemSideText}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                {rank.length > 2 ? rank[2].menu : ''}
              </Text>
              <View style={styles.likeView}>
                <Icon name="heart" size={20} color={'#F2706F'} />
                <Text style={styles.likeViewText}>
                  {rank.length > 2 ? rank[2].like : ''}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.containerBottom}>{rankComponent()}</View>
    </View>
  );
}

const GradeHead = props => {
  const color = props.color;
  const grade = props.grade;
  return (
    <View
      style={{
        flex: 0.2,
        width: '100%',
        flexDirection: 'row',
        marginTop: 5,
      }}>
      <View
        style={{
          width: '40%',
          backgroundColor: color,
          height: 2,
          marginTop: 8,
        }}
      />
      <View
        style={{
          width: '20%',
          borderWidth: 1,
          borderColor: color,
          height: 20,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: color,
        }}>
        <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
          {grade}
        </Text>
      </View>
      <View
        style={{
          width: '40%',
          backgroundColor: color,
          height: 2,
          marginTop: 8,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#ffffff',
  },
  containerAppBar: {
    flex: 1.5,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 10,
  },
  containerTop: {
    flex: 4,
    flexDirection: 'row',

    height: '100%',
    width: '100%',

    margin: 5,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#ffffff',
  },
  containerTopItem: {
    flex: 1,

    height: '100%',

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'white',
  },
  containerTopItemCenter: {
    flex: 1,

    height: '100%',
    width: '90%',

    alignItems: 'center',
    justifyContent: 'flex-end',

    paddingBottom: 20,

    backgroundColor: 'white',
    borderRadius: 10,

    borderColor: '#E5E5E5',
    borderWidth: 3,
  },
  containerTopItemSide: {
    flex: 1,

    height: '100%',
    width: '90%',

    alignItems: 'center',
    justifyContent: 'flex-end',

    marginTop: 15,
    paddingBottom: 20,

    backgroundColor: 'white',
    borderRadius: 10,

    borderColor: '#E5E5E5',
    borderWidth: 3,
  },
  containerBottom: {
    flex: 10,

    height: '100%',
    width: '100%',

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#ffffff',
  },
  containerBottomItem: {
    flex: 1,

    height: '100%',
    width: '95%',

    alignItems: 'center',
    justifyContent: 'center',

    margin: 8,

    backgroundColor: 'white',
    borderRadius: 10,
  },
  logoImage: {
    width: 50,
    height: 50,
  },
  likeView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeViewText: {
    color: '#F2706F',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  topItemSideText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  topItemCenterText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 13,
  },
});
