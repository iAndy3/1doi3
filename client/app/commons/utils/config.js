export const APP_URL = 'http://localhost:3000/api';
export const request = (url, options) => fetch(`${APP_URL}${url}`, Object.assign({}, {headers: {'Content-Type': 'application/json'}}, options)).then(b => b.json());