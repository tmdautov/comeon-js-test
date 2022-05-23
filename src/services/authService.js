
const API_HOST = 'http://localhost:3001';

export function login(username, password) {
  const credentials = {
    username, 
    password 
  };

  return fetch(`${API_HOST}/login`, {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  })
}

export function logout() {
  return fetch(`${API_HOST}/logout`)
    .then((response) => response.json());
}


export default {
  login,
  logout
}