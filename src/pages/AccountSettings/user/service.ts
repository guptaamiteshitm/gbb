import request from 'umi-request';
import { UserListParams } from './data.d';

export async function queryReminder(params?: UserListParams) {
  return request('/api/user', {
    params,
  });
}

export async function removeUser(params: { key: number[] }) {
  return request('/api/user', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addUser(params: UserListParams) {
  return request('/api/user', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateUser(params: UserListParams) {
  return request('/api/user', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}
