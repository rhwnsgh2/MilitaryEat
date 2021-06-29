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
import {TextInput} from 'react-native-gesture-handler';
import {getReview, postReview} from '../../../api/external';
import * as Storage from '../../../api/localStorage';
import Icon from 'react-native-vector-icons/Ionicons';

const ReviewModal = props => {
  const {modal, reviewButtonPress, asyncGetReview, id} = props;
  let [writeText, setWriteText] = useState('');

  const sendPress = async () => {
    let token = JSON.parse(await Storage._loadData('obj')).token;
    try {
      await postReview(token, writeText, id);
      asyncGetReview();
      reviewButtonPress(false);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Modal
      onRequestClose={() => {
        reviewButtonPress(false);
      }}
      animationType="visbile"
      transparent={true}
      visible={modal}
      style={styles.modal}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <View style={styles.modalTitle}>
            <Text style={styles.modalTitleText}>리뷰 작성</Text>
            <View style={styles.modalTitleQuitButtonDistance} />
            <TouchableOpacity
              style={styles.modalTitleQuitButton}
              onPress={() => {
                reviewButtonPress(false);
              }}>
              <Icon name="close-circle-outline" size={28} color="#B9DB6A" />
            </TouchableOpacity>
          </View>
          <View style={styles.modalBottom}>
            <TextInput
              style={styles.modalTextInput}
              onChangeText={setWriteText}
            />

            <TouchableOpacity onPress={sendPress}>
              <Text style={styles.sendButtonText}>보내기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
  },
  modalBackground: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  modalContainer: {
    height: '50%',
    width: '95%',
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#B9DB6A',
  },
  modalTitle: {
    height: 30,
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
  },
  modalTitleText: {
    fontSize: 24,
    color: '#B9DB6A',
    fontWeight: 'bold',
  },
  modalTitleQuitButton: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitleQuitButtonDistance: {
    flex: 8,
  },
  sendButtonText: {
    fontSize: 20,
    color: '#B9DB6A',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
  modalTextInput: {
    flex: 12,
    height: '100%',
    borderColor: '#B9DB6A',
    borderWidth: 2,
    borderRadius: 20,
    margin: 5,
    fontSize: 15,
  },
  modalBottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
export default ReviewModal;
