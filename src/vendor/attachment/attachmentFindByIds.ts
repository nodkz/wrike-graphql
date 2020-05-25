import client from '../client';

export type FindByIdsArgs = {
  ids: string[];
  versions: boolean;
};

// https://developers.wrike.com/api/v4/attachments/#get-attachments
export async function attachmentFindByIds(opts: FindByIdsArgs) {
  const { ids, versions } = opts || {};

  if (!ids) {
    throw new Error('You should provide at least one id in `ids` argument');
  }

  const params = {} as Record<string, any>;
  if (versions) params.versions = true;

  const res = await client.get(`/attachments/${ids.join(',')}`, { params });

  return res?.data?.data;
}
