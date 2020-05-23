import client from '../client';

type FindManyOpts = {};

// https://developers.wrike.com/api/v4/workflows/#query-workflows
export async function workflowFindMany(_opts?: FindManyOpts) {
  const res = await client.get('/workflows', {});

  return res?.data?.data;
}
