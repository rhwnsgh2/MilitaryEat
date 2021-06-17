import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {MenuOneMeal} from './menuScreen';
import {TextInput} from 'react-native-gesture-handler';

const MenuReviewScreen = ({navigation, route}) => {
  console.log(route.params.props);
  let [modal, setModal] = useState(false);
  let {windowHeight, windowWidth} = Dimensions.get('window');
  let reviewButtonPress = on => {
    setModal(on);
  };
  let [writeText, setWriteText] = useState('');
  return (
    <View style={styles.reviewContainer}>
      <Modal
        animationType="visbile"
        transparent={true}
        visible={modal}
        style={{position: 'absolute'}}>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}>
          <View
            style={{
              height: '50%',
              width: '95%',
              backgroundColor: 'white',
              padding: 22,
              justifyContent: 'center',

              borderRadius: 20,
              borderWidth: 2,
            }}>
            <View style={{height: 30, width: '100%', flexDirection: 'row'}}>
              <Text style={{fontSize: 20}}>리뷰쓰기</Text>
              <View style={{flex: 1}} />
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: 50,
                  height: 25,
                  width: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  reviewButtonPress(false);
                }}>
                <Text>X</Text>
              </TouchableOpacity>
            </View>
            <TextInput style={{flex: 12}} onChangeText={setWriteText} />
            <View style={{flex: 1}}>
              <Text>☆☆☆☆☆ 별점을 남겨주세요.</Text>
              <TouchableOpacity
                onPress={() => {
                  console.log(writeText);
                }}>
                <Text>보내기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <MenuOneMeal
        menu={route.params.props.menu}
        meal={route.params.props.meal}
        key={route.params.props.key}
        navigation={navigation}
        review={true}
      />
      <View style={styles.imgContainer}>
        <Image
          style={(styles.imgContainer, {width: windowWidth, height: '100%'})}
          source={require('../img/test.png')}
          resizeMode={'stretch'}
        />
      </View>
      <View style={styles.review}>
        <ReviewComponent
          press={() => {
            reviewButtonPress(true);
          }}
        />
      </View>
    </View>
  );
};

const ReviewComponent = props => {
  return (
    <View style={styles.review}>
      <View style={styles.reviewTitle}>
        <Text style={styles.reviewTitleText}>리뷰</Text>
        <View style={styles.reviewTitleEmpty} />
        <TouchableOpacity
          style={styles.reviewTitleButton}
          onPress={props.press}>
          <Text>리뷰작성</Text>
        </TouchableOpacity>
      </View>
      <ReviewScrollView />
    </View>
  );
};
const ReviewScrollView = props => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.reviewEachContainer}>
        <View style={styles.reviewLayoutTop}>
          <View style={styles.reviewLayoutTopEach}>
            <Text>★★★★★</Text>
          </View>
          <View style={styles.reviewLayoutTopEach}>
            <Text>2021-06-17</Text>
          </View>
          <View style={styles.reviewLayoutTopEach}>
            <Text>****님</Text>
          </View>
        </View>
        <View style={styles.reviewLayoutBottom}>
          <Text>test</Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default MenuReviewScreen;

const writeReview = props => {
  return <View />;
};

const styles = StyleSheet.create({
  reviewContainer: {
    marginTop: 10,
    borderBottomWidth: 1.5,
    borderColor: '#aaa',
    flex: 1,
  },
  scrollView: {
    marginTop: 20,
  },
  imgContainer: {
    flex: 1,
  },
  review: {
    flex: 1,
    flexDirection: 'column',
  },
  reviewEachContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'column',
  },
  reviewLayoutTop: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
  },
  reviewLayoutTopEach: {
    flex: 1,
  },
  reviewLayoutBottom: {
    marginLeft: 20,
  },
  reviewTitle: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  reviewTitleButton: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 10,
  },
  reviewTitleEmpty: {
    flex: 4.5,
  },
  reviewTitleText: {
    flex: 1,
    fontSize: 20,
  },
});
