// @flow
import { SET_USER } from './constants';

const initialState = {
  user: {}
};

type TUserReducer = {
  user: TUser
};

type TUser = {
  name: string,
  age: number,
  isAdmin: boolean,
  id: string
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
