import request from '../utils/request';

export async function queryUsers() {
  return request('/api/users');
}

export async function queryCurrent() {
  return request('/api/currentUser');
}
