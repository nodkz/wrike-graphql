import client from '../client';

export interface CreateArgs {
  customField: Record<string, any>;
}

// https://developers.wrike.com/api/v4/custom-fields/#create-custom-field
export async function customFieldCreate(opts: CreateArgs) {
  const { customField } = opts || {};

  if (!customField?.title) throw new Error('You should provide `title`');

  const res = await client.post(`/customfields`, customField);

  return res?.data?.data[0];
}
