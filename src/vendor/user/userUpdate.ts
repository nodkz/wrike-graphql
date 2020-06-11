import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface UserUpdateArgs {
  id: string;
  profile: Record<string, any>;
}

// https://developers.wrike.com/api/v4/users/#modify-user
export async function userUpdate(opts: UserUpdateArgs, config: AxiosRequestConfig) {
  const { id, profile } = opts || {};

  if (!id) throw new Error('You should provide `id`');
  const res = await client.put(`/users/${id}`, { profile }, config);

  return res?.data?.data[0];
}
