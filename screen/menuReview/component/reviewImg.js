import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getUserInfo} from '../../../api/external';
import {useSelector} from 'react-redux';

const ReviewImg = props => {
  const [userInfo, setUserInfo] = useState('');
  const reduxState = useSelector(state => state);
  useEffect(() => {
    const asyncGetUserInfo = async () => {
      getUserInfo(reduxState.token).then(
        response => {
          setUserInfo(response.data);
        },
        error => {
          console.log(error);
        },
      );
    };
    asyncGetUserInfo();
  }, []);
  if (userInfo != '') {
    if (userInfo.role == 'ADMIN') {
      return <Text> 사진이 있습니다.</Text>;
    } else {
      return <Text> 사진이 없습니다.</Text>;
    }
  }
};
export default ReviewImg;
const styles = StyleSheet.create({});
