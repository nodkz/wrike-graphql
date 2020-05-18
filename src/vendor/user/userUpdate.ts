import client from '../client';

export interface UserUpdateArgs {
  id: string;
  profile: Record<string, any>;
}

// https://developers.wrike.com/api/v4/users/#modify-user
export async function userUpdate(opts: UserUpdateArgs) {
  const { id, profile } = opts || {};

  if (!id) throw new Error('You should provide `id`');
  const res = await client.put(`/users/${id}`, { profile });

  return res?.data?.data[0];
}
