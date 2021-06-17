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
  const fullURL = URL + 'review/new';
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
export default postLogin;
