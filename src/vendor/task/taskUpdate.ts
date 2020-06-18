import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface TaskUpdateArgs {
  id: string;
  task: Record<string, any>;
}

// https://developers.wrike.com/api/v4/tasks/#modify-tasks
export async function taskUpdate(opts: TaskUpdateArgs, context: AxiosRequestConfig) {
  const { id, task } = opts || {};

  if (!id) throw new Error('You should provide `id`');
  const res = await client.put(`/tasks/${id}`, task, context);

  return res?.data?.data[0];
}
