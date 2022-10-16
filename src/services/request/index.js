import axios from 'axios';
import { BASE_URL, TIMEOUT } from './config';

class AirbnbRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
    this.instance.interceptors.response.use(
      (res) => res.data,
      (err) => err,
    );
  }

  requset(config) {
    return this.instance.request(config);
  }

  get(config) {
    return this.requset({ ...config, method: 'get' });
  }

  post(config) {
    return this.requset({ ...config, method: 'post' });
  }
}
export default new AirbnbRequest(BASE_URL, TIMEOUT);
