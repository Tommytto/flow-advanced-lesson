// @flow
import { DELETE_USER, SET_USER_DATA, UPDATE_USER_DATA } from './constants';
import { typecast } from '../../common/types';
import { mergeFirstDeep } from '../../common/helpers/redux';

type TUser = {
  name: string,
  age: number,
  isAdmin: boolean,
  id: string
};

// ID всегда лучше хранить в строках.
type TUserData = $$MayBeRecord<TUser>;

type TUserReducer = {
  userData: TUserData
};

const initialState: TUserReducer = {
  userData: {
    [3]: 3
  }
};

export type TActionSetUserData = {
  type: typeof SET_USER_DATA,
  payload: TUserData
};

export type TActionUpdateUserData = {
  type: typeof UPDATE_USER_DATA,
  payload: TUserData
};

export type TActionDeleteUser = {
  type: typeof DELETE_USER,
  payload: string
};

type TAction = TActionSetUserData | TActionUpdateUserData | TActionDeleteUser;

export function userReducer(state: TUserReducer = initialState, action: TAction): TUserReducer {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload
      };
    case UPDATE_USER_DATA: {
      const newUserData = mergeFirstDeep({ oldInfo: state.userData, newInfo: action.payload });
      return {
        ...state,
        userData: {
          ...state.userData,
          ...newUserData
        }
      };
    }
    case DELETE_USER: {
      const userArray = typecast<TUser[]>(Object.values(state.userData));
      const userDataWithNoDeleted = userArray.filter(({ id }) => id !== action.payload);
      return userDataWithNoDeleted.reduce((res, item) => {
        res[item.id] = item;
        return res;
      }, {});
    }
    default:
      (action: empty);
      return state;
  }
}
