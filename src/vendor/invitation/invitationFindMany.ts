import client from '../client';
import { AxiosRequestConfig } from 'axios';

type FindManyOpts = unknown;

// https://developers.wrike.com/api/v4/invitations/#query-invitations
export async function invitationFindMany(_opts: FindManyOpts, context: AxiosRequestConfig) {
  const res = await client.get('/invitations', context);

  return res?.data?.data;
}
