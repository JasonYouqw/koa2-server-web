import axios from 'axios';
const hostUrl = '127.0.0.1:8080';
/**
 * get request
 * @authors yqw
 * @param  {[type]} url   [description]
 * @param  {[type]} query [description]
 * @return {[type]}       [description]
 */
export const get = (req) => {
  const { url, data = null } = req;
  console.log('data:', JSON.stringify(data));
  return axios.get(
    {
      url: `${hostUrl}${url}`,
      method: 'GET',
      params: data,
    },
  ).then((res) => {
    return Promise.resolve(res.data);
  }).catch((error) => {
    return Promise.reject(error);
  });
};

/**
 * post request
 * @authors yqw
 * @param  {[type]} url   [description]
 * @param  {[type]} query [description]
 * @return {[type]}       [description]
//  */
export const post = (req) => {
  const { url, data = null, headers = null } = req;
  return axios(
    {
      url: `${hostUrl}${url}`,
      method: 'post',
      data,
      headers: headers || {
        'Content-Type': 'application/json;charset=UTF-8'
      },
    },
  ).then((res) => {
    return Promise.resolve(res.data);
  }).catch((error) => {
    return Promise.reject(error);
  });
};

export default {
  get,
  post
};
