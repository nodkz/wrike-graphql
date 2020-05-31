import client from '../client';

type CommentFindFilter = {
  folderId?: string;
  taskId?: string;
  contactId?: string;
  timelogCategoryId?: string;
  createdDate?: {
    start: Date;
    end: Date;
  };
  updatedDate?: {
    start: Date;
    end: Date;
  };
  trackedDate?: {
    start: Date;
    end: Date;
  };
  me?: boolean;
  descendants?: boolean;
  subTasks?: boolean;
  timelogCategories?: string[];
};

export type FindManyOpts = {
  plainText?: boolean;
  filter?: CommentFindFilter;
};

// https://developers.wrike.com/api/v4/timelogs/#query-timelogs
export async function timelogFindMany(opts?: FindManyOpts) {
  const { filter, plainText } = opts || {};

  let params: Record<string, any> = {};

  const { folderId, taskId, contactId, timelogCategoryId, ...restFilter } = filter || {};

  if (restFilter) {
    params = { ...restFilter, plainText };
  }

  let url = '/timelogs';
  if (taskId) {
    url = `/tasks/${taskId}/timelogs`;
  } else if (folderId) {
    url = `/folders/${folderId}/timelogs`;
  } else if (contactId) {
    url = `/contacts/${contactId}/timelogs`;
  } else if (timelogCategoryId) {
    url = `/timelog_categories/${timelogCategoryId}/timelogs`;
  }

  const res = await client.get(url, { params });

  return res?.data?.data;
}
