import axios from 'axios';
import * as dateFormat from './dateFormat';

const URL = 'https://mnd-meal-api.defcon.or.kr';

export const postLogin = (id, pw) => {
  return axios.post(
    URL + '/member/login',
    {
      username: id,
      password: pw,
    },
    {
      headers: {'content-type': 'application/json'},
    },
  );
};

export const getMeal = (token, date) => {
  const year = dateFormat.year(date);
  const month = dateFormat.month(date);
  const week = dateFormat.week(date);
  const fullURL =
    URL +
    '/daily-meal/list?' +
    'year=' +
    year +
    '&month=' +
    month +
    '&week=' +
    week;
  console.log(fullURL);
  return axios.get(fullURL, {
    headers: {Authorization: token},
  });
};

export const postReview = (token, content, mealId) => {
  const fullURL = URL + '/review/new';
  return axios.post(
    fullURL,
    {
      content: content,
      mealId: mealId,
    },
    {
      headers: {Authorization: token},
    },
  );
};

export const getReview = (token, mealId, page = 0, size = 10) => {
  const fullURL =
    URL + '/review/list?mealId=' + mealId + '&page=' + page + '&size=' + size;
  console.log(fullURL);
  return axios.get(fullURL, {
    headers: {Authorization: token},
  });
};

export const postLike = (token, mealId, menuId) => {
  const fullURL = URL + '/menu/like';
  console.log(token, menuId, mealId);
  return axios.post(
    fullURL,
    {
      mealId: mealId,
      menuId: menuId,
    },
    {
      headers: {Authorization: token},
    },
  );
};

export const getUserInfo = token => {
  const fullURL = URL + '/member/info';
  return axios.get(fullURL, {
    headers: {Authorization: token},
  });
};

export const postImg = (token, data) => {
  const fullURL = URL + '/meal-image/upload';
  console.log(token, data);
  return axios.post(fullURL, data, {
    headers: {Authorization: token, 'Content-Type': 'multipart/form-data'},
  });
};

export const getImg = (token, mealId) => {
  console.log('getimg', token, mealId);
  const fullURL = URL + '/meal-image/download?mealId=' + mealId;
  return axios.get(fullURL, {
    headers: {Authorization: token},
    responseType: 'arraybuffer',
  });
};

export const getRank = (token, date) => {
  const year = dateFormat.year(date);
  const month = dateFormat.month(date);
  const week = dateFormat.week(date);
  const fullURL =
    URL + '/rank/top10?' + 'year=' + year + '&month=' + month + '&week=' + week;
  return axios.get(fullURL, {
    headers: {Authorization: token},
  });
};

export const postJoin = (
  username,
  password,
  name,
  militaryId = null,
  role = 'SOLDIER',
) => {
  const fullURL = URL + '/member/join';
  return axios.post(fullURL, {
    username: username,
    password: password,
    name: name,
    militaryId: militaryId,
    role: role,
  });
};
export default postLogin;
