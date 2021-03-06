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
import {useSelector} from 'react-redux';
import ReviewImg from './component/reviewImg';

const MenuReviewScreen = ({navigation, route}) => {
  let [modal, setModal] = useState(false);
  let [review, setReview] = useState({});
  const reduxState = useSelector(state => state);
  let reviewButtonPress = on => {
    setModal(on);
  };
  console.log(route);
  console.log(reduxState);
  const asyncGetReview = async () => {
    let token = reduxState.token.token;
    await getReview(token, route.params.props.id).then(
      response => {
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
      <View style={styles.containerAppBar}>
        <Image
          style={styles.logoImage}
          resizeMode="contain"
          source={require('../../img/logo.png')}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontSize: 20}}>김병장님,</Text>
          <Text style={{fontSize: 20}}>식사시간입니다.</Text>
        </View>
      </View>
      <MenuOneMeal
        menu={route.params.props.menu}
        meal={route.params.props.meal}
        key={route.params.props.key}
        review={true}
        id={route.params.props.id}
        date={route.params.props.date}
      />
      <View style={styles.imgContainer}>
        <ReviewImg id={route.params.props.id} />
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
          <Text style={styles.reviewButtonText}> 리뷰작성 </Text>
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
    borderBottomWidth: 1.5,
    borderColor: '#aaa',
    flex: 1,
    backgroundColor: '#E8F2DB',
  },
  scrollView: {
    flex: 1,
  },
  imgContainer: {
    flex: 1,
  },
  review: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
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
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderColor: '#E8F2DB',
  },
  reviewTitleButton: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#E8F2DB',
  },
  reviewTitleEmpty: {
    flex: 1,
  },
  reviewTitleText: {
    flex: 1,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  containerAppBar: {
    flex: 0.3,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 10,
  },
  logoImage: {
    width: 50,
    height: 50,
  },
  dateText: {
    fontSize: 15,
  },
  reviewButtonText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#aaa',
  },
});
