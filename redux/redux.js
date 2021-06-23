import {combineReducers, createStore, Reducer, Store} from 'redux';

import {menuReducer} from './menuReducer';
import {tokenReducer} from './tokenReducer';
import {userReducer} from './userReducer';

const rootReducer = combineReducers({
  menu: menuReducer,
  token: tokenReducer,
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;
