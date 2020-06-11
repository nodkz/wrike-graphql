import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface UpdateArgs {
  folderId: string;
  folder: Record<string, any>;
}

// https://developers.wrike.com/api/v4/folders-projects/#modify-folder
export async function folderUpdate(opts: UpdateArgs, config: AxiosRequestConfig) {
  const { folderId, folder } = opts || {};

  if (!folderId) throw new Error('You should provide `folderId`');

  const res = await client.put(`/folders/${folderId}`, folder, config);

  return res?.data?.data[0];
}
