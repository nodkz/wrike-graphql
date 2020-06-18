import client from '../client';
import { AxiosRequestConfig } from 'axios';

interface SpaceFilter {
  withArchived: boolean;
  userIsMember: boolean;
}

// https://developers.wrike.com/api/v4/spaces/
export async function spaceFindMany(opts: { filter?: SpaceFilter }, context: AxiosRequestConfig) {
  const { filter } = opts || {};
  let params: Record<string, any> = {};
  if (filter) {
    params = { ...filter };
  }
  const res = await client.get('/spaces', { ...context, params });
  return res?.data?.data;
}
