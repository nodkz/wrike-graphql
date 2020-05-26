import client from '../client';

// https://developers.wrike.com/api/v4/data-export/#refresh-data-export
export async function dataExportRefresh() {
  const res = await client.post(`/data_export`);
  return res?.data?.data?.[0];
}
