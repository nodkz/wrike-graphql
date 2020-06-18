import client from '../client';
import { AxiosRequestConfig } from 'axios';

// https://developers.wrike.com/api/v4/attachments/#get-access-url-for-attachment
export async function attachmentAccessUrl(
  id: string,
  context: AxiosRequestConfig
): Promise<string | void> {
  const res = await client.get(`/attachments/${id}/url`, context);
  return res?.data?.data?.[0].url;
}
