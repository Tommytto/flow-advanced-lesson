// @flow
import { DELETE_USER, SET_USER_DATA, UPDATE_USER_DATA } from './constants';
import type { TThunk } from '../../../store';
import type { TActionDeleteUser, TActionSetUserData, TActionUpdateUserData } from './reducers';

const actionSetUserData = (payload): TActionSetUserData => ({
  type: SET_USER_DATA,
  payload
});

const actionUpdateUser = (payload): TActionUpdateUserData => ({
  type: UPDATE_USER_DATA,
  payload
});

const actionDeleteUser = (payload): TActionDeleteUser => ({
  type: DELETE_USER,
  payload
});

export function getUserList(): TThunk {
  return dispatch => {
    dispatch({
      type: 'TESET'
    });
  };
}

export function updateUser(): TThunk {
  return (dispatch, getState, extra) => {
    const state = getState();
    state.user.userDatat2;

    extra.userApi.getUser();
    dispatch(getUserList());
  };
}
