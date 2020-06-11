import client from '../client';
import { AxiosRequestConfig } from 'axios';

// https://developers.wrike.com/api/v4/data-export/#refresh-data-export
export async function dataExportRefresh(_opts: any, config: AxiosRequestConfig) {
  const res = await client.post(`/data_export`, {}, config);
  return res?.data?.data?.[0];
}
