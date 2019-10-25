// @flow
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { userReducer } from './modules/user/redux/reducers';
import thunk from 'redux-thunk';
import UserApi from './modules/user/services/UserApi';
import type { Store } from 'redux';
import { companyReducer } from './modules/company/redux/reducers';
import CompanyApi from './modules/company/services/CompanyApi';

type TAction = {
  type: *
};

const reducers = {
  user: userReducer,
  company: companyReducer
};

export type TReducers = $ObjMap<typeof reducers, <V>((any, any) => V) => V>;

const rootReducer = combineReducers<typeof reducers, TAction>(reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const extraArgs = {
  userApi: new UserApi(),
  companyApi: new CompanyApi()
};

export type TStore = TReducers;

declare var bb: TStore;
bb.user.userData2;
bb.company.companyData['sdf'].id;

export type TExtraArgs = $ObjMap<typeof extraArgs, <V>(extra: V) => V>;
export type TThunk = (dispatch: TDispatch, getState: () => TStore, TExtraArgs) => any;
export type TDispatch = ({ type: * } | TThunk) => any;

export const store = createStore<TStore, TAction, TDispatch>(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument(extraArgs)))
);
