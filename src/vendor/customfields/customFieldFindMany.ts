import client from '../client';
import { AxiosRequestConfig } from 'axios';

type FindManyOpts = unknown;

// https://developers.wrike.com/api/v4/custom-fields/#query-custom-fields
export async function customFieldFindMany(_opts: FindManyOpts, context: AxiosRequestConfig) {
  const res = await client.get('/customfields', context);
  return res?.data?.data;
}
