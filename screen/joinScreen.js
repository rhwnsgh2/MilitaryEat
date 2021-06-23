import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const JoinScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text>LOGO_국방부</Text>
        <Text style={styles.textTitle}>김병장님,</Text>
        <Text style={styles.textTitle}>식사시간입니다.</Text>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.containerBottomInputID}>
          <Text>ID INPUT</Text>
          <TextInput style={styles.inputID} />
        </View>
        <View style={styles.containerBottomInputPW}>
          <Text>PW INPUT</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.inputPW}
          />
        </View>
        <View style={styles.containerBottomMenu}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.btnMenu}>
            <Text style={styles.textMenu}>아이디 찾기</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={styles.btnMenu}>
            <Text style={styles.textMenu}>비밀번호 찾기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.btnMenu}>
            <Text style={styles.textMenu}>회원가입</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerBottomLogin}>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  containerTop: {
    flex: 1,
    flexDirection: 'column',

    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  containerBottom: {
    flex: 1,
    flexDirection: 'column',

    width: '100%',

    marginTop: 10,

    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerBottomInputID: {
    flexDirection: 'row',

    height: 50,
    width: '80%',

    margin: 10,
    paddingStart: 10,
    paddingEnd: 10,

    alignItems: 'center',
    justifyContent: 'flex-start',

    borderColor: 'lightgray',
    borderRadius: 25,
    borderWidth: 2,
  },
  containerBottomInputPW: {
    flexDirection: 'row',

    height: 50,
    width: '80%',

    margin: 10,
    paddingStart: 10,
    paddingEnd: 10,

    alignItems: 'center',
    justifyContent: 'flex-start',

    borderColor: 'lightgray',
    borderRadius: 25,
    borderWidth: 2,
  },
  containerBottomMenu: {
    flexDirection: 'row',

    width: '75%',

    marginBottom: 20,

    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  btnMenu: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputID: {
    height: '100%',
    width: '100%',
  },
  inputPW: {
    height: '100%',
    width: '100%',
  },
  textMenu: {
    fontSize: 15,
  },
  textTitle: {
    fontSize: 25,
  },
});

export default JoinScreen;
