import {AsyncStorage} from 'react-native';

export const _saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

export const _saveDataObject = async object => {
  try {
    await AsyncStorage.setItem('obj', object);
  } catch (error) {
    console.log(error);
  }
};

export const _loadData = async key => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data;
  } catch (error) {
    console.log('AsyncStorage Error ' + error);
  }
};

export default _saveData;
