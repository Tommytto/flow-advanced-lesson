import Api from '../../common/services/BaseApi';

export default class CompanyApi extends Api {
  getUser() {
    return this.get('get-company-list.json');
  }
}
