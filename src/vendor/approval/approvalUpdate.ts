import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface UpdateArgs {
  id: string;
  approval: Record<string, any>;
}

// https://developers.wrike.com/api/v4/approvals/#update-approval
export async function approvalUpdate(opts: UpdateArgs, context: AxiosRequestConfig) {
  const { id, approval } = opts || {};

  if (!id) throw new Error('You should provide `id`');
  const res = await client.put(`/approvals/${id}`, approval, context);

  return res?.data?.data[0];
}
