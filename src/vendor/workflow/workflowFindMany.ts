import client from '../client';
import { AxiosRequestConfig } from 'axios';

type FindManyOpts = unknown;

// https://developers.wrike.com/api/v4/workflows/#query-workflows
export async function workflowFindMany(_opts: FindManyOpts, context: AxiosRequestConfig) {
  const res = await client.get('/workflows', context);

  return res?.data?.data;
}
