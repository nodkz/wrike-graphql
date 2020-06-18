import client from '../client';
import { AxiosRequestConfig } from 'axios';

// https://developers.wrike.com/documentation/api/methods/query-user
export async function userFindById(opts: { id: string }, context: AxiosRequestConfig) {
  const { id } = opts || {};
  const res = await client.get(`/users/${id}`, context);
  return res?.data?.data?.[0];
}
