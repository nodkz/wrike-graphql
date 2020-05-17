import client from '../client';

export interface UpdateArgs {
  id: string;
  invitation: Record<string, any>;
}

// https://developers.wrike.com/api/v4/invitations/#update-invitation
export async function update(opts: UpdateArgs) {
  const { id, invitation } = opts || {};

  if (!id) throw new Error('You should provide `id`');
  const res = await client.put(`/invitations/${id}`, invitation);

  return res?.data?.data[0];
}
