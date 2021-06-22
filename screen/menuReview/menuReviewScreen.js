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
import {MenuOneMeal} from '../menuScreen/component/menuOneMeal';
import {getReview, postReview} from '../../api/external';
import * as Storage from '../../api/localStorage';
import ReviewModal from './component/reviewModal';
import ReviewEach from './component/reviewEach';

const MenuReviewScreen = ({navigation, route}) => {
  let [modal, setModal] = useState(false);
  let [review, setReview] = useState({});
  let reviewButtonPress = on => {
    setModal(on);
  };

  const asyncGetReview = async () => {
    let token = JSON.parse(await Storage._loadData('obj')).token;
    await getReview(token, route.params.props.id).then(
      response => {
        console.log(response.data);
        setReview(response.data);
      },
      reject => {
        console.log(reject);
      },
    );
  };
  useEffect(() => {
    asyncGetReview();
  }, []);
  return (
    <View style={styles.reviewContainer}>
      <ReviewModal
        modal={modal}
        reviewButtonPress={reviewButtonPress}
        asyncGetReview={asyncGetReview}
        id={route.params.props.id}
      />
      <MenuOneMeal
        menu={route.params.props.menu}
        meal={route.params.props.meal}
        key={route.params.props.key}
        review={true}
        id={route.params.props.id}
        date={route.params.props.date}
      />
      <View style={styles.imgContainer}>
        {/* <Image
          style={(styles.imgContainer, {width: windowWidth, height: '100%'})}
          source={require('../img/test.png')}
          resizeMode={'stretch'}
        /> */}
      </View>
      <View style={styles.review}>
        <ReviewComponent
          press={() => {
            reviewButtonPress(true);
          }}
          review={review}
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
      <ReviewScrollView review={props.review} />
    </View>
  );
};
const ReviewScrollView = props => {
  const review = props.review.content;
  if (Array.isArray(review)) {
    let reviewEach = review.map((revieweach, index) => {
      return <ReviewEach review={revieweach} key={index} />;
    });
    return <ScrollView style={styles.scrollView}>{reviewEach}</ScrollView>;
  } else {
    return <Text>리뷰가없습니다.</Text>;
  }
};
export default MenuReviewScreen;

const styles = StyleSheet.create({
  reviewContainer: {
    marginTop: 10,
    borderBottomWidth: 1.5,
    borderColor: '#aaa',
    flex: 1,
  },
  scrollView: {
    marginTop: 20,
    flex: 1,
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
