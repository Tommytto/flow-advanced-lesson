// @flow

import type {
  TActionDeleteCompany,
  TActionSetCompanyData,
  TActionUpdateCompanyData
} from '../../company/redux/reducers';
import { DELETE_COMPANY, SET_COMPANY_DATA, UPDATE_COMPANY_DATA } from '../../company/redux/constants';
import type { TThunk } from '../../../store';

const actionSetCompanyData = (payload): TActionSetCompanyData => ({
  type: SET_COMPANY_DATA,
  payload
});

const actionUpdateCompany = (payload): TActionUpdateCompanyData => ({
  type: UPDATE_COMPANY_DATA,
  payload
});

const actionDeleteCompany = (payload): TActionDeleteCompany => ({
  type: DELETE_COMPANY,
  payload
});

export function getCompanyList(): TThunk {
  return dispatch => {
    dispatch({
      type: 'TESET'
    });
  };
}

export function updateCompany(): TThunk {
  return (dispatch, getState, extra) => {
    const state = getState();
    state.company.companyData['sdf'].id;

    extra.companyApi.getCompany();
    dispatch(getCompanyList());
  };
}
