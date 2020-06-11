import client from '../client';
import { AxiosRequestConfig } from 'axios';

type FindManyOpts = unknown;

// https://developers.wrike.com/api/v4/timelog-categories/#query-timelog-categories
export async function timelogCategoryFindMany(_opts: FindManyOpts, config: AxiosRequestConfig) {
  const res = await client.get('/timelog_categories', config);
  return res?.data?.data;
}
