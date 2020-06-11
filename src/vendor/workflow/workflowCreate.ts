import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface CreateArgs {
  workflow: Record<string, any>;
}

// https://developers.wrike.com/api/v4/workflows/#create-workflow
export async function workflowCreate(opts: CreateArgs, config: AxiosRequestConfig) {
  const { workflow } = opts || {};

  if (!workflow?.name) throw new Error('You should provide `name`');

  const res = await client.post(`/workflows`, workflow, config);

  return res?.data?.data[0];
}
