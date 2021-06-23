import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import LoginComponent from '../component/loginComponent';

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
<<<<<<< HEAD
      <View>
        <Text> 타이틀화면 </Text>
        <TextInput onChangeText={setId} />
        <TextInput onChangeText={setPw} secureTextEntry={true} />
        <Button
          title="아이디 찾기"
          onPress={() => navigation.navigate('title')}
        />
        <Button title="비밀번호 찾기" />
        <Button title="회원가입" onPress={() => navigation.navigate('join')} />
        <LoginComponent
          loginPress={loginPress}
          navigation={navigation}
          route={route}
        />
      </View>
=======
      <View style={styles.container}>
            <View style={styles.containerTop}>
                <Text>LOGO_국방부</Text>
                <Text style={styles.textTitle}>김병장님,</Text>
                <Text style={styles.textTitle}>식사시간입니다.</Text>
            </View>
            <View style={styles.containerBottom}>
                <View style={styles.containerBottomInputID}>
                    <Text>ID INPUT</Text>
                    <TextInput onChangeText={setId}  style={styles.inputID}></TextInput>
                </View>
                <View style={styles.containerBottomInputPW}>
                    <Text>PW INPUT</Text>
                    <TextInput onChangeText={setPw} secureTextEntry={true} style={styles.inputPW}></TextInput>
                </View>
                <View style={styles.containerBottomMenu}>
                    <TouchableOpacity onPress={() => navigation.navigate('title')} activeOpacity={0.5} style={styles.btnMenu}>
                        <Text style={styles.textMenu}>아이디 찾기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} style={styles.btnMenu}>
                        <Text style={styles.textMenu}>비밀번호 찾기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} style={styles.btnMenu}>
                        <Text style={styles.textMenu}>회원가입</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerBottomLogin}>
                  <LoginComponent
                    loginPress={loginPress}
                    navigation={navigation}
                    route={route} />
                </View>
            </View>
        </View>
>>>>>>> d20ba15ee640bf84dd8f51c89396fc9ae337e2d9
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
    btnMenu:{
        alignItems: 'center',
        justifyContent:'center',
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

export default TitleScreen;
