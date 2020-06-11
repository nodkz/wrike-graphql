import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface UpdateArgs {
  id: string;
  customField: Record<string, any>;
}

// https://developers.wrike.com/api/v4/custom-fields/#modify-custom-field
export async function customFieldUpdate(opts: UpdateArgs, config: AxiosRequestConfig) {
  const { id, customField } = opts || {};

  if (!id) throw new Error('You should provide `id`');
  const res = await client.put(`/customfields/${id}`, customField, config);

  return res?.data?.data[0];
}
