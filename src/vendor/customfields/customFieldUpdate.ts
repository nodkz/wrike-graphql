import client from '../client';

export interface UpdateArgs {
  id: string;
  customField: Record<string, any>;
}

// https://developers.wrike.com/api/v4/custom-fields/#modify-custom-field
export async function customFieldUpdate(opts: UpdateArgs) {
  const { id, customField } = opts || {};

  if (!id) throw new Error('You should provide `id`');
  const res = await client.put(`/customfields/${id}`, customField);

  return res?.data?.data[0];
}
