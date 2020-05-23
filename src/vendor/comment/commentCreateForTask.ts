import client from '../client';

export interface CreateArgs {
  taskId: string;
  comment: Record<string, any>;
}

// https://developers.wrike.com/api/v4/comments/#create-comment
export async function commentCreateForTask(opts: CreateArgs) {
  const { taskId, comment } = opts || {};

  if (!taskId) throw new Error('You should provide `taskId`');
  if (!comment?.text) throw new Error('You should provide `text`');

  const res = await client.post(`/tasks/${taskId}/comments`, comment);

  return res?.data?.data[0];
}
