import client from '../client';

// https://developers.wrike.com/api/v4/attachments/#get-access-url-for-attachment
export async function attachmentAccessUrl(id: string): Promise<string | void> {
  const res = await client.get(`/attachments/${id}/url`);
  return res?.data?.data?.[0].url;
}
