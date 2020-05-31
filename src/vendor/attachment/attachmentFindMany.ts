import client from '../client';
import { GraphQLResolveInfo } from 'graphql';
import { getFlatProjectionFromAST } from 'graphql-compose';

type CommentFindFilter = {
  createdDate?: {
    start: Date;
    end: Date;
  };
  folderId?: string;
  taskId?: string;
};

export type FindManyOpts = {
  withUrls?: boolean;
  versions?: boolean;
  filter?: CommentFindFilter;
};

// https://developers.wrike.com/api/v4/attachments/#get-attachments
export async function _attachmentFindMany(opts?: FindManyOpts) {
  const { filter, withUrls, versions } = opts || {};

  let params: Record<string, any> = {};

  const { folderId, taskId, ...restFilter } = filter || {};

  if (restFilter) {
    params = { ...restFilter, withUrls: !!withUrls, versions: !!versions };
  }

  let url = '/attachments';
  if (folderId) {
    url = `/folders/${folderId}/attachments`;
  } else if (taskId) {
    url = `/tasks/${taskId}/attachments`;
  }

  const res = await client.get(url, { params });

  return res?.data?.data;
}

export function attachmentFindMany(
  opts: Exclude<FindManyOpts, 'withUrls'> & { info: GraphQLResolveInfo }
) {
  const requestedFields = Object.keys(getFlatProjectionFromAST(opts.info));
  const withUrls = requestedFields.includes('url');
  return _attachmentFindMany({ ...opts, withUrls });
}
