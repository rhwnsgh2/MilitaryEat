import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
        <Text>BTN_LIKE</Text>
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

    backgroundColor: 'lightgray',
    borderRadius: 10,
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

    margin: 10,
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
    fontSize: 20,
  },
  textTitle: {
    fontSize: 20,
  },
});
