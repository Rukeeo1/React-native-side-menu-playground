import axios from 'axios';

import constants from '../constants';

export default axios.create({
  baseURL: constants.API_URL,
  responseType: 'json',
});
