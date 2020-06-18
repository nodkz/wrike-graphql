import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface CreateArgs {
  customField: Record<string, any>;
}

// https://developers.wrike.com/api/v4/custom-fields/#create-custom-field
export async function customFieldCreate(opts: CreateArgs, context: AxiosRequestConfig) {
  const { customField } = opts || {};

  if (!customField?.title) throw new Error('You should provide `title`');

  const res = await client.post(`/customfields`, customField, context);

  return res?.data?.data[0];
}
