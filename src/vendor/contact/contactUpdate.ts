import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface ContactUpdateArgs {
  id: string;
  metadata: Record<string, any>;
}

// https://developers.wrike.com/api/v4/contacts/#modify-contact
export async function contactUpdate(opts: ContactUpdateArgs, context: AxiosRequestConfig) {
  const { id, metadata } = opts || {};

  if (!id) throw new Error('You should provide `id`');
  const res = await client.put(`/contacts/${id}`, { metadata }, context);

  return res?.data?.data[0];
}
