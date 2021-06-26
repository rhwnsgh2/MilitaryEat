import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import LoginComponent from '../component/loginComponent';
import Icon from 'react-native-vector-icons/Ionicons';

const TitleScreen = ({navigation, route}) => {
  console.log('Titlescreen render ');
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const loginPress = () => {
    return [id, pw];
  };
  // const navigation = props.navigation;
  if (loading || !loading) {
    return (
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <Image
            style={styles.logoImage}
            resizeMode="contain"
            source={require('../img/logo.png')}
          />
          <Text style={styles.textTitle}>김병장님,</Text>
          <Text style={styles.textTitle}>식사시간입니다.</Text>
        </View>
        <View style={styles.containerBottom}>
          <View style={styles.containerBottomInputID}>
            <Icon
              style={styles.icon}
              name="person"
              size={30}
              color={'#E8F2DB'}
            />
            <TextInput onChangeText={setId} style={styles.inputID} />
          </View>
          <View style={styles.containerBottomInputPW}>
            <Icon
              style={styles.icon}
              name="lock-closed"
              size={30}
              color={'#E8F2DB'}
            />
            <TextInput
              onChangeText={setPw}
              secureTextEntry={true}
              style={styles.inputPW}
            />
          </View>
          <View style={styles.containerBottomMenu}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.btnMenu}
              onPress={() => {
                navigation.navigate('join');
              }}>
              <Text style={styles.textMenu}>회원가입</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerBottomLogin}>
            <LoginComponent
              loginPress={loginPress}
              navigation={navigation}
              route={route}
            />
          </View>
        </View>
      </View>
    );
  }
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

    margin: 20,
    paddingStart: 10,
    paddingEnd: 10,

    alignItems: 'center',
    justifyContent: 'flex-start',

    borderColor: '#E8F2DB',
    borderRadius: 25,
    borderWidth: 3,
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

    borderColor: '#E8F2DB',
    borderRadius: 25,
    borderWidth: 3,
  },
  containerBottomMenu: {
    flexDirection: 'row',

    width: '75%',

    marginBottom: 30,

    alignItems: 'center',
    justifyContent: 'center',
  },
  btnMenu: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputID: {
    height: '100%',
    width: '100%',
    margin: 10,
    fontSize: 18,
  },
  inputPW: {
    height: '100%',
    width: '100%',
    margin: 10,
    fontSize: 18,
  },
  textMenu: {
    fontSize: 15,
  },
  textTitle: {
    fontSize: 25,
  },
  logoImage: {
    width: 200,
    height: 200,
  },
  icon: {
    marginBottom: 10,
    marginTop: 5,
    marginLeft: 10,
  },
});

export default TitleScreen;
