import client from '../client';
import { AxiosRequestConfig } from 'axios';

type FindManyOpts = unknown;

// https://developers.wrike.com/api/v4/invitations/#query-invitations
export async function invitationFindMany(_opts: FindManyOpts, config: AxiosRequestConfig) {
  const res = await client.get('/invitations', config);

  return res?.data?.data;
}
