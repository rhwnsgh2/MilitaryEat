import axios from 'axios';

const URL = 'https://mnd-meal-api.defcon.or.kr';

export const postLogin = (id, pw) => {
  return axios.post(
    URL + '/login',
    {
      username: id,
      password: pw,
    },
    {
      headers: {'content-type': 'application/json'},
    },
  );
};

export default postLogin;
