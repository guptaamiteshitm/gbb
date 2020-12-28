import request from 'umi-request';
import { GbbItemParams } from './data.d';

export async function queryGbb(params?: GbbItemParams) {
  return request('/api/GbbData', {
    params,
  });
}
