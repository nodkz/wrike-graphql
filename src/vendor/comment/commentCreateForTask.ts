import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface CreateArgs {
  taskId: string;
  comment: Record<string, any>;
}

// https://developers.wrike.com/api/v4/comments/#create-comment
export async function commentCreateForTask(opts: CreateArgs, config: AxiosRequestConfig) {
  const { taskId, comment } = opts || {};

  if (!taskId) throw new Error('You should provide `taskId`');
  if (!comment?.text) throw new Error('You should provide `text`');

  const res = await client.post(`/tasks/${taskId}/comments`, comment, config);

  return res?.data?.data[0];
}
