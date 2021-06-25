import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  TouchableOpacity,
  Platform,
  Image,
  ImageBackground,
} from 'react-native';
import {getImg, getUserInfo} from '../../../api/external';
import {useSelector} from 'react-redux';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {postImg} from './../../../api/external';
import {Buffer} from 'buffer';

const ReviewImg = props => {
  const [userInfo, setUserInfo] = useState('');
  const [imageSource, setImageSource] = useState('');
  const reduxState = useSelector(state => state);
  const createFormData = (photo, body = {}) => {
    const data = new FormData();

    data.append('file', {
      name: photo.fileName,
      type: photo.type,
      uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
    });
    Object.keys(body).forEach(key => {
      data.append(key, body[key]);
    });

    return data;
  };

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
      getUserInfo(reduxState.token.token).then(
        response => {
          setUserInfo(response.data);
        },
        error => {
          console.log(error);
        },
      );
    };
    const asyncGetImage = async () => {
      console.log(reduxState);
      getImg(reduxState.token.token, props.id).then(
        response => {
          const buffer = Buffer.from(response.data, 'binary').toString(
            'base64',
          );
          setImageSource(buffer);
        },
        error => {
          console.log(error);
        },
      );
    };
    asyncGetUserInfo();
    asyncGetImage();
  }, []);
  if (userInfo != '') {
    if (userInfo.role == 'ADMIN') {
      return (
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => {
              launchImageLibrary(options, async response => {
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
                  let data = createFormData(response.assets[0], {
                    mealId: props.id,
                  });

                  await postImg(reduxState.token.token, data).then(
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
            <ImageComponent image={imageSource} />
          </TouchableOpacity>
        </View>
      );
    } else {
      return <ImageComponent image={imageSource} />;
    }
  } else {
    return <ImageComponent image={imageSource} />;
  }
};
export default ReviewImg;

const ImageComponent = props => {
  const [size, setSize] = useState({height: 0, width: 0});
  const onLayout = event => {
    let {height, width} = event.nativeEvent.layout;
    setSize({height: height, width: width});
  };
  if (props.image == '') {
    return <Text> 사진이 없습니다.</Text>;
  } else {
    return (
      <View style={{flex: 1}} onLayout={onLayout}>
        <Image
          source={{uri: 'data:image/jpeg;base64,' + props.image}}
          style={{
            resizeMode: 'stretch',
            width: size.width,
            height: size.height,
          }}
        />
      </View>
    );
  }
};
const styles = StyleSheet.create({});
