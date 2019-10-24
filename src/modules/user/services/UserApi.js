import Api from '../../common/services/BaseApi';

export default class UserApi extends Api {
  getUser() {
    return this.get('get-user-list.json');
  }
}
