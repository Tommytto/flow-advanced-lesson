// @flow
import { combineReducers, createStore } from 'redux';
import { userReducer } from './modules/user/redux/reducers';

const rootReducer = combineReducers({
  user: userReducer
});

export const store = createStore(rootReducer);
