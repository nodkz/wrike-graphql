import client from '../client';

type CommentFindFilter = {
  updatedDate: {
    start: Date;
    end: Date;
  };
  folderId: string;
  taskId: string;
};

export type FindManyOpts = {
  plainText: boolean;
  filter?: CommentFindFilter;
  limit?: number;
};

// https://developers.wrike.com/api/v4/comments/#get-comments
export async function commentFindMany(opts?: FindManyOpts) {
  const { filter, limit, plainText } = opts || {};

  let params: Record<string, any> = {};

  const { folderId, taskId, ...restFilter } = filter || {};

  if (restFilter) {
    params = { ...restFilter, plainText };
  }

  if (limit) {
    params.limit = limit;
  }

  let url = '/comments';
  if (folderId) {
    url = `/folders/${folderId}/comments`;
  } else if (taskId) {
    url = `/tasks/${taskId}/comments`;
  }

  const res = await client.get(url, { params });

  return res?.data?.data;
}
