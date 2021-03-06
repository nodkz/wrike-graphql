import client from '../client';
import { AxiosRequestConfig } from 'axios';

export type FindArgs = {
  id?: string;
};

// https://developers.wrike.com/api/v4/data-export/#get-data-export
export async function dataExportById(opts: FindArgs, context: AxiosRequestConfig) {
  const { id } = opts || {};
  const res = await client.get(`/data_export${id ? `/${id}` : ''}`, context);
  return res?.data?.data?.[0];
}
