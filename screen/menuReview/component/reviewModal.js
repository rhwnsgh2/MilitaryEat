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
    console.log(writeText);
  };
  return (
    <Modal
      animationType="visbile"
      transparent={true}
      visible={modal}
      style={styles.modal}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <View style={styles.modalTitle}>
            <Text style={styles.modalTitleText}>리뷰쓰기</Text>
            <View style={styles.modalTitleQuitButtonDistance} />
            <TouchableOpacity
              style={styles.modalTitleQuitButton}
              onPress={() => {
                reviewButtonPress(false);
              }}>
              <Text style={styles.modalTitleQuitButtonText}>X</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.modalTextInput}
            onChangeText={setWriteText}
          />
          <View style={styles.modalBottom}>
            <TouchableOpacity onPress={sendPress}>
              <Text>보내기</Text>
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
    borderWidth: 2,
  },
  modalTitle: {
    height: 30,
    width: '100%',
    flexDirection: 'row',
  },
  modalTitleText: {
    fontSize: 20,
  },
  modalTitleQuitButton: {
    borderWidth: 1,
    borderRadius: 50,
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitleQuitButtonDistance: {
    flex: 1,
  },
  modalTitleQuitButtonText: {
    fontSize: 15,
  },
  modalTextInput: {
    flex: 12,
  },
  modalBottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
export default ReviewModal;
