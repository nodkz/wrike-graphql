import client from '../client';

export type Args = {
  version?: string;
};

// https://developers.wrike.com/api/v4/data-export/#get-data-export-schema
export async function dataExportSchema(opts?: Args) {
  const { version } = opts || {};
  const res = await client.get(`/data_export_schema`, { params: { version } });
  return res?.data?.data;
}
