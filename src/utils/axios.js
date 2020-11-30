import axios from 'axios';
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
  console.log(`url:${url}`);
  return axios(
    {
      url,
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
 */
export const post = (req) => {
  const { url, data = null, headers = null } = req;
  return axios(
    {
      url,
      method: 'POST',
      data: data,
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
