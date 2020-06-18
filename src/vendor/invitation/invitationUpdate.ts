import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface UpdateArgs {
  id: string;
  invitation: Record<string, any>;
}

// https://developers.wrike.com/api/v4/invitations/#update-invitation
export async function invitationUpdate(opts: UpdateArgs, context: AxiosRequestConfig) {
  const { id, invitation } = opts || {};

  if (!id) throw new Error('You should provide `id`');
  const res = await client.put(`/invitations/${id}`, invitation, context);

  return res?.data?.data[0];
}
