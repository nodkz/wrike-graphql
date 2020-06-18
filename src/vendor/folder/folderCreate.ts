import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface CreateArgs {
  parentFolderId: string;
  folder: Record<string, any>;
}

// https://developers.wrike.com/api/v4/folders-projects/#create-folder
export async function folderCreate(opts: CreateArgs, context: AxiosRequestConfig) {
  const { parentFolderId, folder } = opts || {};

  if (!parentFolderId) throw new Error('You should provide `parentFolderId`');
  if (!folder?.title) throw new Error('You should provide `title`');

  const res = await client.post(`/folders/${parentFolderId}/folders`, folder, context);

  return res?.data?.data[0];
}
