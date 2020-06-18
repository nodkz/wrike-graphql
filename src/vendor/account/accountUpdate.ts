import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface UpdateArgs {
  metadata: Record<string, any>;
}

// https://developers.wrike.com/api/v4/account/#modify-account
export async function accountUpdate(opts: UpdateArgs, context: AxiosRequestConfig) {
  const { metadata } = opts || {};

  const res = await client.put(`/account`, { metadata }, context);

  return res?.data?.data[0];
}
