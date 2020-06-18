import client from '../client';
import { AxiosRequestConfig } from 'axios';

export type FindManyOpts = {
  folderId: string;
};

// https://developers.wrike.com/api/v4/approvals/#get-approvals
export async function approvalForFolder(opts: FindManyOpts, context: AxiosRequestConfig) {
  const { folderId } = opts || {};
  const res = await client.get(`/folders/${folderId}/approvals`, context);
  return res?.data?.data;
}
