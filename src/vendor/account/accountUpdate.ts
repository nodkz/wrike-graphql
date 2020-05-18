import client from '../client';

export interface UpdateArgs {
  metadata: Record<string, any>;
}

// https://developers.wrike.com/api/v4/account/#modify-account
export async function accountUpdate(opts: UpdateArgs) {
  const { metadata } = opts || {};

  const res = await client.put(`/account`, { metadata });

  return res?.data?.data[0];
}
