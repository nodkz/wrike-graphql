import client from '../client';
import { AxiosRequestConfig } from 'axios';

type FindManyOpts = unknown;

// https://developers.wrike.com/api/v4/custom-fields/#query-custom-fields
export async function customFieldFindMany(_opts: FindManyOpts, config: AxiosRequestConfig) {
  const res = await client.get('/customfields', config);
  return res?.data?.data;
}
