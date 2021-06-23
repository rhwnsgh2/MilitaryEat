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
  console.log(year, month, week);
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
export default postLogin;
