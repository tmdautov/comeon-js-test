const API_HOST = 'http://localhost:3001';

export function getGameList() {
  return fetch(`${API_HOST}/games`)
    .then((response) => response.json());
}

export function getCategoyList() {
  return fetch(`${API_HOST}/categories`)
    .then((response) => response.json());
}

export default {
  getGameList,
  getCategoyList
}