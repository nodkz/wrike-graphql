import client from '../client';
import { AxiosRequestConfig } from 'axios';

export type FindArgs = {
  id: string;
};

// https://developers.wrike.com/api/v4/async-job/
export async function asyncJobFindById(opts: FindArgs, config: AxiosRequestConfig) {
  const { id } = opts || {};
  const res = await client.get(`/async_job/${id}`, config);
  return res?.data?.data?.[0];
}
