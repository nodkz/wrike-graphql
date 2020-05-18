import client from '../client';

export interface CreateArgs {
  group: Record<string, any>;
}

// https://developers.wrike.com/api/v4/groups/#create-groups
export async function groupCreate(opts: CreateArgs) {
  const { group } = opts || {};

  if (!group?.title) throw new Error('You should provide `title`');

  const res = await client.post(`/groups`, group);

  return res?.data?.data[0];
}
