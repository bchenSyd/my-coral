import 'whatwg-fetch';

const API_HOST = 'http://localhost:8080';

export default function callApi(endpoint, method = 'get', body = null) {
    const fullUrl = (endpoint.indexOf(API_HOST) === -1) ? API_HOST + endpoint : endpoint;
    const options = {
        method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : body,
    };

    return fetch(fullUrl, { ...options })
        .then(response => {
            return response.json().then(json => ({ json, response }));
        })
        .then(({ json, response }) => {
            if (!response.ok) {
                return Promise.reject(json);
            }
            return Promise.resolve(json);
        })
        .catch(err => Promise.reject(err));
}
