import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface CreateArgs {
  group: Record<string, any>;
}

// https://developers.wrike.com/api/v4/groups/#create-groups
export async function groupCreate(opts: CreateArgs, context: AxiosRequestConfig) {
  const { group } = opts || {};

  if (!group?.title) throw new Error('You should provide `title`');

  const res = await client.post(`/groups`, group, context);

  return res?.data?.data[0];
}
