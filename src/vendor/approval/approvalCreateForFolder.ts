import client from '../client';

export interface CreateArgs {
  folderId: string;
  approval: Record<string, any>;
}

// https://developers.wrike.com/api/v4/approvals/#create-approval
export async function approvalCreateForFolder(opts: CreateArgs) {
  const { folderId, approval } = opts || {};

  if (!folderId) throw new Error('You should provide `folderId`');

  const res = await client.post(`/folders/${folderId}/approvals`, approval);

  return res?.data?.data[0];
}
