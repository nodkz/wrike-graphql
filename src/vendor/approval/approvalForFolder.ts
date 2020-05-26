import client from '../client';

export type FindManyOpts = {
  folderId: string;
};

// https://developers.wrike.com/api/v4/approvals/#get-approvals
export async function approvalForFolder(opts?: FindManyOpts) {
  const { folderId } = opts || {};
  const res = await client.get(`/folders/${folderId}/approvals`);
  return res?.data?.data;
}
