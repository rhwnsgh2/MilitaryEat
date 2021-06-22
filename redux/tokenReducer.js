export const SET_TOKEN = 'SET_TOKEN';

export const setToken = menu => {
  return {
    type: SET_TOKEN,
    menu: menu,
  };
};

export const tokenReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {...state, menu: action.menu};
    default:
      return state;
  }
};
