import client from '../client';
import { AxiosRequestConfig } from 'axios';

type FindManyOpts = unknown;

// https://developers.wrike.com/api/v4/timelog-categories/#query-timelog-categories
export async function timelogCategoryFindMany(_opts: FindManyOpts, context: AxiosRequestConfig) {
  const res = await client.get('/timelog_categories', context);
  return res?.data?.data;
}
