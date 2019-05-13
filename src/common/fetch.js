import "whatwg-fetch";

// const API_HOST = 'http://localhost:8082';

export default function callApi(endpoint, method = "get", body = null) {
  // const fullUrl = (endpoint.indexOf(API_HOST) === -1) ? API_HOST + endpoint : endpoint;
  const options = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: body ? JSON.stringify(body) : body
  };

  return fetch(endpoint, { ...options })
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return Promise.resolve(json);
    })
    .catch(err => Promise.reject(err));
}
