import client from '../client';

export type FindArgs = {
  id?: string;
};

// https://developers.wrike.com/api/v4/data-export/#get-data-export
export async function dataExportById(opts?: FindArgs) {
  const { id } = opts || {};
  const res = await client.get(`/data_export${id ? `/${id}` : ''}`);
  return res?.data?.data?.[0];
}
