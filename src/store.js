// @flow
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { userReducer } from './modules/user/redux/reducers';
import thunk from 'redux-thunk';
import UserApi from './modules/user/services/UserApi';

const rootReducer = combineReducers({
  user: userReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk.withExtraArgument({
      userApi: new UserApi()
    })
  )
);
