import { GraphQLResolveInfo } from 'graphql';
import { getFlatProjectionFromAST } from 'graphql-compose';
import client from '../client';
import { AxiosRequestConfig } from 'axios';

export const projectionFields = ['metadata', 'subscription', 'customFields'] as const;

type Projection = typeof projectionFields[number][];

type FindManyOpts = {
  filter?: {
    metadata: Record<string, any>;
  };
  projection?: Projection;
};

// https://developers.wrike.com/api/v4/account/#query-accounts
export async function _accountFindOne(opts: FindManyOpts, context: AxiosRequestConfig) {
  const { filter, projection } = opts || {};

  const params: Record<string, any> = { ...filter };

  if (projection) {
    if (projection.length > 0) params.fields = projection;
  }

  const res = await client.get('/account', { ...context, params });

  return res?.data?.data?.[0];
}

export function accountFindOne(
  opts: Exclude<FindManyOpts, 'projection'> & { info: GraphQLResolveInfo },
  context: AxiosRequestConfig
) {
  const requestedFields = Object.keys(getFlatProjectionFromAST(opts.info));
  const projection = projectionFields.filter((n) => requestedFields.includes(n));
  return _accountFindOne({ ...opts, projection }, context);
}
