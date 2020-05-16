import client from '../client';

export interface TaskUpdateArgs {
  id: string;
  task: Record<string, any>;
}

// https://developers.wrike.com/api/v4/tasks/#modify-tasks
export async function update(opts: TaskUpdateArgs) {
  const { id, task } = opts || {};

  if (!id) throw new Error('You should provide `id`');
  const res = await client.put(`/tasks/${id}`, task);

  return res?.data?.data[0];
}
