import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  TouchableOpacity,
} from 'react-native';
import {getUserInfo} from '../../../api/external';
import {useSelector} from 'react-redux';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {postImg} from './../../../api/external';

const ReviewImg = props => {
  const [userInfo, setUserInfo] = useState('');
  const [imageSource, setImageSource] = useState('');
  const reduxState = useSelector(state => state);
  console.log(imageSource);
  const options = {
    title: 'Load Photo',
    customButtons: [
      {name: 'button_id_1', title: 'CustomButton 1'},
      {name: 'button_id_2', title: 'CustomButton 2'},
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

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
      return (
        <View>
          <TouchableOpacity
            onPress={() => {
              launchImageLibrary(options, response => {
                console.log('Response = ', response);

                if (response.didCancel) {
                  console.log('User cancelled image picker');
                } else if (response.error) {
                  console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                  console.log(
                    'User tapped custom button: ',
                    response.customButton,
                  );
                  Alert.alert(response.customButton);
                } else {
                  // You can also display the image using data:
                  // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                  setImageSource(response.uri);
                  postImg(reduxState.token, props.id, response.uri).then(
                    res => {
                      console.log(res);
                    },
                    error => {
                      console.log(error);
                    },
                  );
                }
              });
            }}>
            <Text>test</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return <Text> 사진이 없습니다.</Text>;
    }
  } else {
    return <Text> 사진이 없습니다.</Text>;
  }
};
export default ReviewImg;
const styles = StyleSheet.create({});
