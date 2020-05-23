import client from '../client';

export interface Args {
  folderId: string;
  options: Record<string, any>;
}

// https://developers.wrike.com/api/v4/folders-projects/#copy-folder
export async function folderCopy(opts: Args) {
  const { folderId, options } = opts || {};

  if (!folderId) throw new Error('You should provide `folderId`');
  if (!options.parent) throw new Error('You should provide `parent`');

  const res = await client.delete(`/copy_folder/${folderId}`, options);

  return res?.data?.data[0];
}
