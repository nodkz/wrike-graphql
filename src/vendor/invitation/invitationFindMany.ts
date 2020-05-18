import client from '../client';

type FindManyOpts = {};

// https://developers.wrike.com/api/v4/invitations/#query-invitations
export async function invitationFindMany(_opts?: FindManyOpts) {
  const res = await client.get('/invitations', {});

  return res?.data?.data;
}
