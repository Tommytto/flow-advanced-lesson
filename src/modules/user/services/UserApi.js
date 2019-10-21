import BaseApi from '../../common/services/BaseApi';

export default class UserApi extends BaseApi {
  getUserList() {
    return this.request('/test.json');
  }
}
