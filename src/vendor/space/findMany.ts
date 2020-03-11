import client from '../client';

interface SpaceFilter {
  withArchived: boolean;
  userIsMember: boolean;
}

// https://developers.wrike.com/documentation/api/methods/get-spaces
export async function findMany(opts?: { filter?: SpaceFilter }) {
  const { filter } = opts || {};
  let params: Record<string, any> = {};
  if (filter) {
    params = { ...filter };
  }
  const res = await client.get('/spaces', { params });
  return res?.data?.data;
}
