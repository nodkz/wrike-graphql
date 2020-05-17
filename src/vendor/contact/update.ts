import client from '../client';

export interface ContactUpdateArgs {
  id: string;
  metadata: Record<string, any>;
}

// https://developers.wrike.com/api/v4/contacts/#modify-contact
export async function update(opts: ContactUpdateArgs) {
  const { id, metadata } = opts || {};

  if (!id) throw new Error('You should provide `id`');
  const res = await client.put(`/contacts/${id}`, { metadata });

  return res?.data?.data[0];
}