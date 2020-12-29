import Axios from 'axios';

const requester = Axios.create({
  baseURL: 'http:localhost:3000',
});

requester.interceptors.request.use(
  (config) => {
    // const accountToken = localStorage.getItem('account:token');
    // if (accountToken) {
    //   config.headers.Authorization = `Bearer ${accountToken}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

export const Request = {
  get: (url) => requester.get(url),
  post: (url, body = {}) => requester.post(url, body),
  put: (url, body = {}) => requester.put(url, body),
  delete: (url, params = {}) => requester.delete(url, params),
  //   optionalDelete: (url, params = {}, meta, newRequester) =>
  //     newRequester.delete(url, params, meta),
  //   infinite: (url, params) => requester.get(url, { params }),
  //   requester,
};
