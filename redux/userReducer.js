export const SET_USER = 'SET_USER';

export const setUSER = user => {
  return {
    type: SET_USER,
    user: user,
  };
};

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, user: action.user};
    default:
      return state;
  }
};
