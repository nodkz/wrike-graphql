import client from '../client';
import { GraphQLResolveInfo } from 'graphql-compose/lib/graphql';
import { getFlatProjectionFromAST } from 'graphql-compose';
import { splitRequestBy100 } from '../_helpers/splitRequestBy100';

export const projectionFields = [
  'metadata',
  'hasAttachments',
  'attachmentCount',
  'description',
  'briefDescription',
  'customFields',
  'customColumnIds',
  'superParentIds',
  'space',
  'contractType',
] as const;

type Projection = typeof projectionFields[number][];

type FindByIdsOpts = {
  ids: ReadonlyArray<string>;
  projection?: Projection;
};

// https://developers.wrike.com/api/v4/folders-projects/#get-folder
export async function _folderFindByIds(opts: FindByIdsOpts) {
  const { ids, projection } = opts || {};

  const params: Record<string, any> = {};
  if (projection) {
    if (projection.length > 0) params.fields = projection;
  }

  return splitRequestBy100(ids, async (preparedIds) => {
    const res = await client.get(`/folders/${preparedIds}`, { params });
    return res?.data?.data;
  });
}

export function folderFindByIds(
  opts: Exclude<FindByIdsOpts, 'projection'> & { info: GraphQLResolveInfo }
) {
  const requestedFields = Object.keys(getFlatProjectionFromAST(opts.info));
  const projection = projectionFields.filter((n) => requestedFields.includes(n));
  return _folderFindByIds({ ...opts, projection });
}
