import client from '../client';

// https://developers.wrike.com/documentation/api/methods/query-user
export async function userFindById(opts?: { id: string }) {
  const { id } = opts || {};
  const res = await client.get(`/users/${id}`);
  return res?.data?.data?.[0];
}
