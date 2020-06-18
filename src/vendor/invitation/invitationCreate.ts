import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface CreateArgs {
  invitation: Record<string, any>;
}

// https://developers.wrike.com/api/v4/invitations/#create-invitation
export async function invitationCreate(opts: CreateArgs, context: AxiosRequestConfig) {
  const { invitation } = opts || {};

  if (!invitation?.email) throw new Error('You should provide `email`');

  const res = await client.post(`/invitations`, invitation, context);

  return res?.data?.data[0];
}
