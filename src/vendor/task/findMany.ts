import { GraphQLResolveInfo } from 'graphql';
import { getFlatProjectionFromAST } from 'graphql-compose';
import client from '../client';

export type TaskStatus = 'Active' | 'Completed' | 'Deferred' | 'Cancelled';
export type TaskImportance = 'High' | 'Normal' | 'Low';
export type TaskType = 'Backlog' | 'Milestone' | 'Planned';
export type TaskSortField =
  | 'CreatedDate'
  | 'UpdatedDate'
  | 'CompletedDate'
  | 'DueDate'
  | 'Status'
  | 'Importance'
  | 'Title'
  | 'LastAccessDate';
export type TaskSortOrder = 'Asc' | 'Desc';

type DateRange = {
  start?: Date;
  end?: Date;
  equal?: Date;
};

type ContactID = string;

interface TaskFilter {
  folderId?: string;
  spaceId?: string;
  title?: string;
  status?: TaskStatus;
  importance?: TaskImportance;
  startDate?: DateRange;
  dueDate?: DateRange;
  scheduledDate?: DateRange;
  createdDate?: DateRange;
  updatedDate?: DateRange;
  completedDate?: DateRange;
  authors?: ContactID[];
  responsibles?: ContactID[];
  type?: TaskType;
  metadata?: Record<string, string>;
}

export const projectionFields = [
  'authorIds',
  'hasAttachments',
  'attachmentCount',
  'parentIds',
  'superParentIds',
  'sharedIds',
  'responsibleIds',
  'description',
  'briefDescription',
  'recurrent',
  'superTaskIds',
  'subTaskIds',
  'dependencyIds',
  'metadata',
  'customFields',
  // 'effortAllocation', // For some Paid accounts
  // 'billingType', // For some Paid accounts
] as const;

type TaskProjection = typeof projectionFields[number][];

type FindManyOpts = {
  filter?: TaskFilter;
  limit?: number;
  pageSize?: number;
  nextPageToken?: string;
  sortField?: TaskSortField;
  sortOrder?: TaskSortOrder;
  projection?: TaskProjection;
  subTasks?: boolean; // Adds subtasks to search scope
  descendants?: boolean; // Adds all descendant folders to search scope
};

// https://developers.wrike.com/documentation/api/methods/query-tasks
export async function _findMany(opts?: FindManyOpts) {
  const {
    filter,
    limit,
    pageSize,
    nextPageToken,
    sortField,
    sortOrder,
    subTasks,
    descendants,
    projection,
  } = opts || {};

  let params: Record<string, any> = {};

  const { folderId, spaceId, ...restFilter } = filter || {};

  if (restFilter) {
    params = { ...restFilter };
  }

  if (limit) {
    params.limit = limit;
  }

  if (pageSize) {
    params.pageSize = pageSize;
  }

  if (nextPageToken) {
    params.nextPageToken = nextPageToken;
  }

  if (sortField) {
    params.sortField = sortField;
  }

  if (sortOrder) {
    params.sortOrder = sortOrder;
  }

  if (subTasks) {
    params.subTasks = subTasks;
  }

  if (descendants) {
    params.descendants = descendants;
  }

  if (projection) {
    if (projection.length > 0) params.fields = projection;
  }

  let url = '/tasks';
  if (folderId) {
    url = `/folders/${folderId}/tasks`;
  } else if (spaceId) {
    url = `/spaces/${spaceId}/tasks`;
  }

  const res = await client.get(url, { params });

  return res?.data?.data;
}

export function findMany(opts: Exclude<FindManyOpts, 'projection'> & { info: GraphQLResolveInfo }) {
  const requestedFields = Object.keys(getFlatProjectionFromAST(opts.info));
  const projection = projectionFields.filter((n) => requestedFields.includes(n));
  return _findMany({ ...opts, projection });
}
