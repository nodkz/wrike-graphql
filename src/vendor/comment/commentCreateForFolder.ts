import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface CreateArgs {
  folderId: string;
  comment: Record<string, any>;
}

// https://developers.wrike.com/api/v4/comments/#create-comment
export async function commentCreateForFolder(opts: CreateArgs, config: AxiosRequestConfig) {
  const { folderId, comment } = opts || {};

  if (!folderId) throw new Error('You should provide `folderId`');
  if (!comment?.text) throw new Error('You should provide `text`');

  const res = await client.post(`/folders/${folderId}/comments`, comment, config);

  return res?.data?.data[0];
}
