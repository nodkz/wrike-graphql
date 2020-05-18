import client from '../client';

export interface CreateArgs {
  invitation: Record<string, any>;
}

// https://developers.wrike.com/api/v4/invitations/#create-invitation
export async function invitationCreate(opts: CreateArgs) {
  const { invitation } = opts || {};

  if (!invitation?.email) throw new Error('You should provide `email`');

  const res = await client.post(`/invitations`, invitation);

  return res?.data?.data[0];
}
