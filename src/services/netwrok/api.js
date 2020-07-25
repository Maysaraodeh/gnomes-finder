import axios from 'axios';
import resolve from '../../helpers/resolve';
const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'https://raw.githubusercontent.com/rrafols/mobile_test/master'
    : 'https://raw.githubusercontent.com/rrafols/mobile_test/master';

export const API_CLIENT = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
});

export const getAPIData = async (path, options) =>
  resolve(
    API_CLIENT.get(`${BASE_URL}/${path}`, { ...options }).then((res) => res)
  );
