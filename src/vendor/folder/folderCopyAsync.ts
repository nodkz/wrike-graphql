import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface Args {
  folderId: string;
  options: Record<string, any>;
}

// https://developers.wrike.com/api/v4/folders-projects/#copy-folder-async
export async function folderCopyAsync(opts: Args, config: AxiosRequestConfig) {
  const { folderId, options } = opts || {};

  if (!folderId) throw new Error('You should provide `folderId`');
  if (!options.parent) throw new Error('You should provide `parent`');

  const res = await client.delete(`/copy_folder_async/${folderId}`, { ...config, ...options });

  return res?.data?.data[0];
}
