import client from '../client';

type FindManyOpts = {};

// https://developers.wrike.com/api/v4/custom-fields/#query-custom-fields
export async function customFieldFindMany(_opts?: FindManyOpts) {
  const res = await client.get('/customfields', {});
  return res?.data?.data;
}
