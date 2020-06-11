import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface CreateArgs {
  folderId: string;
  task: Record<string, any>;
}

// https://developers.wrike.com/api/v4/tasks/#create-task
export async function taskCreate(opts: CreateArgs, config: AxiosRequestConfig) {
  const { folderId, task } = opts || {};

  if (!folderId) throw new Error('You should provide `folderId`');
  if (!task?.title) throw new Error('You should provide `title`');

  const res = await client.post(`/folders/${folderId}/tasks`, task, config);

  return res?.data?.data[0];
}
