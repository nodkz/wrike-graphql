import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface RemoveArgs {
  id: string;
}

// https://developers.wrike.com/api/v4/groups/#delete-groups
export async function groupRemove(opts: RemoveArgs, context: AxiosRequestConfig) {
  const { id } = opts || {};
  if (!id) throw new Error('You should provide `id`');
  const res = await client.delete(`/groups/${id}`, context);
  return res?.data?.data[0];
}
