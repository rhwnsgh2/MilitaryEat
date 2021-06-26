import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const ReviewEach = props => {
  const {content, created, mine} = props.review;
  const dateText = created.slice(0, 10);
  return (
    <View style={styles.reviewEachContainer}>
      <View style={styles.reviewLayoutTop}>
        <View style={styles.reviewLayoutTopEach}>
          <Text>{dateText}</Text>
        </View>
        <View style={styles.reviewLayoutTopEach}>
          <Text>****님</Text>
        </View>
      </View>
      <View style={styles.reviewLayoutBottom}>
        <Text>{content}</Text>
      </View>
    </View>
  );
};
export default ReviewEach;
const styles = StyleSheet.create({
  reviewEachContainer: {
    borderTopWidth: 1,
    flex: 1,
    flexDirection: 'column',
  },
  reviewLayoutTop: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 10,
  },
  reviewLayoutTopEach: {
    flex: 1,
  },
  reviewLayoutBottom: {
    marginLeft: 20,
  },
  reviewTitleText: {
    flex: 1,
    fontSize: 20,
  },
});
