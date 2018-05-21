import axios from 'axios';

const env = process.env.NODE_ENV;

function makeBaseUrl() {
  const protocol = window.location.protocol;
  let site_url = env === 'development' ? window.location.host : window.location.hostname;
  
  return `${protocol}//${site_url}/api`;
}

const client = axios.create({
  baseURL: makeBaseUrl(),
});

/**
 * Request Wrapper with default success/error actions
 */
const request = function (options) {
  const onSuccess = function (response) {
    console.debug('Request Successful:', response);
    return response.data;
  };

  const onError = function (error) {
    if (env === 'test') return;

    console.error('Request Failed:', error.config);

    // Request was made but server responded with something other than 2xx
    if (error.response) {
      console.groupCollapsed('stauts, data, headers');
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
      console.error('Headers:', error.response.headers);
      console.groupEnd();
    }

    return Promise.reject(error.response || error.message);
  };

  if (options.skipDefaultHandling) {
    return client(options);
  }

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export { request as default, client };
