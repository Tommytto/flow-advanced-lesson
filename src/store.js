// @flow
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { userReducer } from './modules/user/redux/reducers';
import thunk from 'redux-thunk';
import UserApi from './modules/user/services/UserApi';

type TAction = {
  type: *
};

const reducers = {
  user: userReducer
};

export type TReducers = $ObjMap<typeof reducers, <V>(test: V) => V>;
const rootReducer = combineReducers<TReducers, TAction>(reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const extraArgs = {
  userApi: new UserApi()
};
export const store = createStore<typeof , TAction, TDispatch>(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument(extraArgs)))
);

store.getState();

export type TStore = typeof rootReducer;
export type TExtraArgs = $ObjMap<typeof extraArgs, <V>(extra: V) => V>;
export type TThunk = (dispatch: TDispatch, getState: () => TStore, TExtraArgs) => any;
export type TDispatch = ({ type: * } | TThunk) => any;
