import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface UpdateArgs {
  folderIds: string[];
  folder: Record<string, any>;
}

// https://developers.wrike.com/api/v4/folders-projects/#modify-folder
export async function folderUpdateMany(opts: UpdateArgs, context: AxiosRequestConfig) {
  const { folderIds, folder } = opts || {};

  if (!folderIds) throw new Error('You should provide `folderIds`');

  const res = await client.put(`/folders/${folderIds.join(',')}`, folder, context);

  return res?.data?.data;
}
