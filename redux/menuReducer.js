export const SET_MENU = 'SET_MENU';

export const setMenu = menu => {
  return {
    type: SET_MENU,
    menu: menu,
  };
};

export const menuReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_MENU:
      return {...state, menu: action.menu};
    default:
      return state;
  }
};
