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
        <View style={styles.containerBottomInputType}>
          <TouchableOpacity activeOpacity={0.5} style={styles.btnType}>
            <Text style={styles.textType}>군인</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={styles.btnType}>
            <Text style={styles.textType}>민간인</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerBottomInputName}>
          <Text>Name INPUT</Text>
          <TextInput secureTextEntry={true} style={styles.inputPW} />
        </View>
        <View style={styles.divider} />
        <View style={styles.containerBottomInputID}>
          <Text>ID INPUT</Text>
          <TextInput style={styles.inputID} />
        </View>
        <View style={styles.divider} />
        <View style={styles.containerBottomInputPW}>
          <Text>PW INPUT</Text>
          <TextInput secureTextEntry={true} style={styles.inputPW} />
        </View>
        <View style={styles.divider} />
        <View style={styles.containerBottomInputNumber}>
          <Text>군번 INPUT</Text>
          <TextInput secureTextEntry={true} style={styles.inputPW} />
        </View>
        <View style={styles.divider} />
        <View style={styles.containerBottomMenu}>
          <TouchableOpacity activeOpacity={0.5} style={styles.btnMenu}>
            <Text style={styles.textMenu}>회원가입</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerBottomLogin} />
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
    flex: 2,
    flexDirection: 'column',

    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  containerBottom: {
    flex: 3,
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

    marginTop: 10,
    paddingStart: 10,
    paddingEnd: 10,

    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerBottomInputName: {
    flexDirection: 'row',

    height: 50,
    width: '80%',

    marginTop: 10,
    paddingStart: 10,
    paddingEnd: 10,

    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerBottomInputNumber: {
    flexDirection: 'row',

    height: 50,
    width: '80%',

    marginTop: 10,
    paddingStart: 10,
    paddingEnd: 10,

    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerBottomInputPW: {
    flexDirection: 'row',

    height: 50,
    width: '80%',

    marginTop: 10,
    paddingStart: 10,
    paddingEnd: 10,

    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerBottomInputType: {
    flexDirection: 'row',

    width: '75%',

    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  containerBottomMenu: {
    flexDirection: 'row',

    width: '75%',

    marginTop: 20,
    marginBottom: 20,

    alignItems: 'center',
    justifyContent: 'center',
  },
  btnMenu: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnType: {
    width: '50%',

    marginLeft: 5,
    marginRight: 5,

    alignItems: 'center',
    justifyContent: 'center',

    borderColor: 'lightgray',
    borderRadius: 25,
    borderWidth: 2,
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
  textType: {
    fontSize: 15,
  },
  divider: {
    height: 2,
    width: '80%',
    backgroundColor: 'lightgray',
  },
});

export default JoinScreen;
