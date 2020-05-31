import client from '../client';

interface Filter {
  statuses?: string;
  updatedDate?: {
    start?: Date;
    end?: Date;
  };
  approvers?: string[];
  pendingApprovers?: string[];
}

export type FindManyOpts = {
  filter?: Filter;
  limit?: number;
  pageSize?: number;
  nextPageToken?: string;
};

// https://developers.wrike.com/api/v4/approvals/#get-approvals
export async function approvalFindMany(opts?: FindManyOpts) {
  const { filter, limit, pageSize, nextPageToken } = opts || {};

  const params: Record<string, any> = filter || {};

  if (limit) {
    params.limit = limit;
  }

  if (pageSize) {
    params.pageSize = pageSize;
  }

  if (nextPageToken) {
    params.nextPageToken = nextPageToken;
  }

  const res = await client.get('/approvals', { params });

  return res?.data?.data;
}
