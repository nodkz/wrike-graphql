import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface UpdateArgs {
  id: string;
  dependency: Record<string, any>;
}

// https://developers.wrike.com/api/v4/dependencies/#modify-dependency
export async function dependencyUpdate(opts: UpdateArgs, config: AxiosRequestConfig) {
  const { id, dependency } = opts || {};

  if (!id) throw new Error('You should provide `id`');
  const res = await client.put(`/dependencies/${id}`, dependency, config);

  return res?.data?.data[0];
}
