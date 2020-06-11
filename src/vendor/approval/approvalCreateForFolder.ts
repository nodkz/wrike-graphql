import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface CreateArgs {
  folderId: string;
  approval: Record<string, any>;
}

// https://developers.wrike.com/api/v4/approvals/#create-approval
export async function approvalCreateForFolder(opts: CreateArgs, config: AxiosRequestConfig) {
  const { folderId, approval } = opts || {};

  if (!folderId) throw new Error('You should provide `folderId`');

  const res = await client.post(`/folders/${folderId}/approvals`, approval, config);

  return res?.data?.data[0];
}
