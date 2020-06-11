import client from '../client';
import { AxiosRequestConfig } from 'axios';

export type Args = {
  version?: string;
};

// https://developers.wrike.com/api/v4/data-export/#get-data-export-schema
export async function dataExportSchema(opts: Args, config: AxiosRequestConfig) {
  const { version } = opts || {};
  const res = await client.get(`/data_export_schema`, { ...config, params: { version } });
  return res?.data?.data;
}
