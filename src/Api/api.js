import axios from 'axios';

const once = (config = {}) => {
  // if (call[requestType]) {
  //   call[requestType].cancel('Only one request allowed at a time. Cancelling first.');
  // }

  // call[requestType] = axios.CancelToken.source();
  // config.cancelToken = call[requestType].token;

  return axios(config);
};

export async function post(url, payload) {
  const response = await doRequest(url, payload, 'post');
  return response;
}

export async function put(url, payload) {
  const response = await doRequest(url, payload, 'put');
  return response;
}

export async function patch(url, payload) {
  console.log(url)
  const response = await doRequest(url, payload, 'patch');
  return response;
}

export async function get(url) {
  const response = await doRequest(url, {}, 'get');
  return response;
}

export async function remove(url) {
  console.log(url)
  const response = await doRequest(url, {}, 'delete');
  return response;
}

async function doRequest(url, payload, method) {
  const config = {
    url: process.env.REACT_APP_BASE_URL + url,
    method,
    headers: {
      'content-type': 'application/json',
    },
    data: payload,
  };
  try {
    const response = await once(config, config.url.split('?')[0]);
    return response;
  } catch (error) {
    const { response } = error;

    return response;
  }
}
