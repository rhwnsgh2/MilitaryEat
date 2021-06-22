import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import RankItem from '../component/rankComponent';

export default function RankScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.containerAppBar}>
        <Text>Title Bar</Text>
      </View>
      <View style={styles.containerTop}>
        <View style={styles.containerTopItem}>
          <View style={styles.containerTopItemSide}>
            <Text>된장찌개</Text>
            <Text>BTN_LIKE</Text>
          </View>
        </View>
        <View style={styles.containerTopItem}>
          <View style={styles.containerTopItemCenter}>
            <Text>된장찌개</Text>
            <Text>BTN_LIKE</Text>
          </View>
        </View>
        <View style={styles.containerTopItem}>
          <View style={styles.containerTopItemSide}>
            <Text>고추장찌개</Text>
            <Text>BTN_LIKE</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#ffffff',
  },
  containerAppBar: {
    flex: 2,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#ffffff',
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

    backgroundColor: '#ffffff',
  },
  containerTopItemCenter: {
    flex: 1,

    height: '100%',
    width: '90%',

    alignItems: 'center',
    justifyContent: 'flex-end',

    paddingBottom: 20,

    backgroundColor: 'lightgray',
    borderRadius: 10,
  },
  containerTopItemSide: {
    flex: 1,

    height: '100%',
    width: '90%',

    alignItems: 'center',
    justifyContent: 'flex-end',

    marginTop: 15,
    paddingBottom: 20,

    backgroundColor: 'lightgray',
    borderRadius: 10,
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

    backgroundColor: 'lightgray',
    borderRadius: 10,
  },
});
