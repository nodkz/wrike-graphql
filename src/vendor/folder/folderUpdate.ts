import client from '../client';

export interface UpdateArgs {
  folderId: string;
  folder: Record<string, any>;
}

// https://developers.wrike.com/api/v4/folders-projects/#modify-folder
export async function folderUpdate(opts: UpdateArgs) {
  const { folderId, folder } = opts || {};

  if (!folderId) throw new Error('You should provide `folderId`');

  const res = await client.put(`/folders/${folderId}`, folder);

  return res?.data?.data[0];
}
