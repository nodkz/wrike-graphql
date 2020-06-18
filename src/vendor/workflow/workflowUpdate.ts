import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface UpdateArgs {
  id: string;
  workflow: Record<string, any>;
}

// https://developers.wrike.com/api/v4/workflows/#modify-workflow
export async function workflowUpdate(opts: UpdateArgs, context: AxiosRequestConfig) {
  const { id, workflow } = opts || {};

  if (!id) throw new Error('You should provide `id`');
  const res = await client.put(`/workflows/${id}`, workflow, context);

  return res?.data?.data[0];
}
