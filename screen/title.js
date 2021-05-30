import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const TitleScreen = ({navigation}) => {
  console.log('TEST');
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  // const navigation = props.navigation;

  useEffect(() => {
    const callApi = async () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('1');
        }, 2000);
      });
    };
    const loadData = async () => {
      try {
        setLoading(true);
        await callApi();
        setLoading(false);
      } catch (e) {}
    };
    loadData();
  }, []);

  const postLoginInfo = async () => {
    try {
      setTimeout(() => {
        navigation.navigate('menu');
      }, 2000);
    } catch (e) {}
  };
  if (loading || !loading) {
    return (
      <View>
        <Text> 타이틀화면 </Text>
        <TextInput />
        <TextInput secureTextEntry={true} />
        <Button
          title="아이디 찾기"
          onPress={() => navigation.navigate('title')}
        />
        <Button title="비밀번호 찾기" />
        <Button title="회원가입" />
        <Button title="LOGIN" onPress={() => postLoginInfo()} />
      </View>
    );
  } else {
    return (
      <View>
        <Text> 다음화면? </Text>
        <Button
          title="test"
          onPress={() => navigation.navigate('menuScreen')}
        />
      </View>
    );
  }
};
export default TitleScreen;
