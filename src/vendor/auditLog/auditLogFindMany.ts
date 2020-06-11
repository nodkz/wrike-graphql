import client from '../client';
import { AxiosRequestConfig } from 'axios';

interface Filter {
  operations?: string[];
  eventDate?: {
    start?: Date;
    end?: Date;
  };
}

export type FindManyOpts = {
  filter?: Filter;
  pageSize?: number;
  nextPageToken?: string;
};

// https://developers.wrike.com/api/v4/audit-log/
export async function auditLogFindMany(opts: FindManyOpts, config: AxiosRequestConfig) {
  const { filter, pageSize, nextPageToken } = opts || {};

  const params: Record<string, any> = filter || {};

  if (pageSize) {
    params.pageSize = pageSize;
  }

  if (nextPageToken) {
    params.nextPageToken = nextPageToken;
  }

  const res = await client.get('/audit_log', { ...config, params });

  return res?.data?.data;
}
