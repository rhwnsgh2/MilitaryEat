import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
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
    );
  }
};
export default TitleScreen;
