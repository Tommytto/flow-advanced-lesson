// @flow
import { DELETE_USER, SET_USER_DATA, UPDATE_USER_DATA } from './constants';
import type { TThunk } from '../../../store';

const actionSetUserData = payload => ({
  type: SET_USER_DATA,
  payload
});

const actionUpdateUser = payload => ({
  type: UPDATE_USER_DATA,
  payload
});

const actionDeleteUser = payload => ({
  type: DELETE_USER,
  payload
});

export function getUserList(): TThunk {
  return (dispatch, getState) => {
    dispatch({
      type: 'TESET'
    });
  };
}

export function updateUser(id: number): TThunk {
  return (dispatch, getState, extra) => {
    extra.test;
    dispatch(getUserList());
  };
}
