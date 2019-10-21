// @flow

import { SET_USER } from './constants';

const actionSetUser = payload => ({
  type: SET_USER,
  payload
});

export function getUserList() {
  return async (dispatch, getState, { userApi }) => {
    const response = await userApi.getUserList();
    console.log(response);
  };
}
