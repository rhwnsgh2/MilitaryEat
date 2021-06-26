import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import RankItem from '../component/rankComponent';
import Icon from 'react-native-vector-icons/Ionicons';

export default function RankScreen() {
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
      <View style={{alignSelf: 'flex-start'}}>
        <Text style={{fontSize: 20}}> 21년 5월 2주차</Text>
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
              <Text style={styles.topItemSideText}>된장찌개</Text>
              <View style={styles.likeView}>
                <Icon name="heart" size={20} color={'#F2706F'} />
                <Text style={styles.likeViewText}>250</Text>
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
              <Text style={styles.topItemCenterText}>된장찌개</Text>
              <View style={styles.likeView}>
                <Icon name="heart" size={20} color={'#F2706F'} />
                <Text style={styles.likeViewText}>250</Text>
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
              <Text style={styles.topItemSideText}>고추장찌개</Text>
              <View style={styles.likeView}>
                <Icon name="heart" size={20} color={'#F2706F'} />
                <Text style={styles.likeViewText}>250</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <RankItem menu="김치찌개" rank="4" />
        <RankItem menu="김치찌개" rank="5" />
        <RankItem menu="김치찌개" rank="6" />
        <RankItem menu="김치찌개" rank="7" />
        <RankItem menu="김치찌개" rank="8" />
        <RankItem menu="김치찌개" rank="9" />
        <RankItem menu="김치찌개" rank="10" />
      </View>
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
    marginLeft: 20,
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
