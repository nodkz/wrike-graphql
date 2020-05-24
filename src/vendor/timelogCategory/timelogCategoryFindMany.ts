import client from '../client';

type FindManyOpts = {};

// https://developers.wrike.com/api/v4/timelog-categories/#query-timelog-categories
export async function timelogCategoryFindMany(_opts?: FindManyOpts) {
  const res = await client.get('/timelog_categories');
  return res?.data?.data;
}
