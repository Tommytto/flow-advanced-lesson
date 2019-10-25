// @flow
import { DELETE_COMPANY, SET_COMPANY_DATA, UPDATE_COMPANY_DATA } from '../../company/redux/constants';
import { typecast } from '../../common/types';
import { mergeFirstDeep } from '../../common/helpers/redux';

type TCompany = {
  name: string,
  isBig: boolean,
  id: string
};

type TCompanyReducer = {
  companyData: $$Record<TCompany>
};

const initialState: TCompanyReducer = {
  companyData: {}
};

export type TActionSetCompanyData = {
  type: typeof SET_COMPANY_DATA,
  payload: $$Record<TCompany>
};

export type TActionUpdateCompanyData = {
  type: typeof UPDATE_COMPANY_DATA,
  payload: $$Record<TCompany>
};

export type TActionDeleteCompany = {
  type: typeof DELETE_COMPANY,
  payload: string
};

type TAction = TActionSetCompanyData | TActionUpdateCompanyData | TActionDeleteCompany;

export function companyReducer(state: TCompanyReducer = initialState, action: TAction): TCompanyReducer {
  switch (action.type) {
    case SET_COMPANY_DATA:
      return {
        ...state,
        companyData: action.payload
      };
    case UPDATE_COMPANY_DATA: {
      const newCompanyData = mergeFirstDeep({ oldInfo: state.companyData, newInfo: action.payload });
      return {
        ...state,
        companyData: {
          ...state.companyData,
          ...newCompanyData
        }
      };
    }
    case DELETE_COMPANY: {
      const companyArray = typecast<TCompany[]>(Object.values(state.companyData));
      const companyDataWithNoDeleted = companyArray.filter(({ id }) => id !== action.payload);
      return companyDataWithNoDeleted.reduce((res, item) => {
        res[item.id] = item;
        return res;
      }, {});
    }
    default:
      (action: empty);
      return state;
  }
}
