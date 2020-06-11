import client from '../client';
import { AxiosRequestConfig } from 'axios';

// https://developers.wrike.com/api/v4/attachments/#get-access-url-for-attachment
export async function attachmentAccessUrl(
  id: string,
  config: AxiosRequestConfig
): Promise<string | void> {
  const res = await client.get(`/attachments/${id}/url`, config);
  return res?.data?.data?.[0].url;
}
