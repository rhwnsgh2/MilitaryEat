export const SET_TOKEN = 'SET_TOKEN';

export const setToken = token => {
  return {
    type: SET_TOKEN,
    token: token,
  };
};

export const tokenReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {...state, token: action.token};
    default:
      return state;
  }
};
