import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function RankItem(props) {
  const menuRank = props.rank;
  const menuTitle = props.menu;

  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <View style={styles.containerLeftRank}>
          <Text style={styles.textRank}>{menuRank}</Text>
        </View>
        <View style={styles.containerLeftTitle}>
          <Text style={styles.textTitle}>{menuTitle}</Text>
        </View>
      </View>
      <View style={styles.containerRight}>
        <View style={styles.likeView}>
          <Icon name="heart" size={20} color={'#F2706F'} />
          <Text style={styles.likeViewText}>250</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',

    height: '100%',
    width: '95%',

    margin: 10,

    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'white',
    borderRadius: 10,
    borderBottomColor: '#E8F2DB',
    borderBottomWidth: 2,
  },
  containerLeft: {
    flex: 1,
    flexDirection: 'row',

    height: '100%',
    width: '100%',

    margin: 10,

    alignItems: 'center',
  },
  containerLeftRank: {
    height: '100%',
    width: 30,

    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLeftTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  containerRight: {
    flex: 1,
    flexDirection: 'row',

    height: '100%',
    width: '100%',

    margin: 10,

    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textRank: {
    fontSize: 23,
  },
  textTitle: {
    fontSize: 23,
  },
  likeView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeViewText: {
    color: '#F2706F',
    fontSize: 15,
  },
});
