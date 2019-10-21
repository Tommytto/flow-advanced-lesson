export default class BaseApi {
  request(url, options) {
    return fetch(url, options).then(res => res.json());
  }
}
