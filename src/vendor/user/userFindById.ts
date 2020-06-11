import client from '../client';
import { AxiosRequestConfig } from 'axios';

// https://developers.wrike.com/documentation/api/methods/query-user
export async function userFindById(opts: { id: string }, config: AxiosRequestConfig) {
  const { id } = opts || {};
  const res = await client.get(`/users/${id}`, config);
  return res?.data?.data?.[0];
}
