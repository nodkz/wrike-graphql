import { approvalDLG } from './approvalDLG';
import { attachmentDLG } from './attachmentDLG';
import { commentDLG } from './commentDLG';
import { contactDL } from './contactDL';
import { customFieldDLG } from './customFieldDLG';
import { dependencyDLG } from './dependencyDLG';
import { folderDL } from './folderDL';
import { taskDL } from './taskDL';
import { timelogDLG } from './timelogDLG';
import { GraphQLResolveInfo } from 'graphql';
import DataLoader from 'dataloader';

enum DataLoaderKind {
  OperationGlobal,
  FieldNode,
}

type DLCfg =
  | { init: () => DataLoader<any, any>; kind: DataLoaderKind.OperationGlobal }
  | { init: (info: GraphQLResolveInfo) => DataLoader<any, any>; kind: DataLoaderKind.FieldNode };

const DataLoadersCfg = {
  // Global DataLoaders
  ApprovalID: { init: approvalDLG, kind: DataLoaderKind.OperationGlobal } as DLCfg,
  AttachmentID: { init: attachmentDLG, kind: DataLoaderKind.OperationGlobal } as DLCfg,
  CommentID: { init: commentDLG, kind: DataLoaderKind.OperationGlobal } as DLCfg,
  DependencyID: { init: dependencyDLG, kind: DataLoaderKind.OperationGlobal } as DLCfg,
  CustomFieldID: { init: customFieldDLG, kind: DataLoaderKind.OperationGlobal } as DLCfg,
  TimelogID: { init: timelogDLG, kind: DataLoaderKind.OperationGlobal } as DLCfg,
  // FieldNodes specific loaders
  ContactID: { init: contactDL, kind: DataLoaderKind.FieldNode } as DLCfg,
  FolderID: { init: folderDL, kind: DataLoaderKind.FieldNode } as DLCfg,
  TaskID: { init: taskDL, kind: DataLoaderKind.FieldNode } as DLCfg,
};

type DataLoaderEntityNames = keyof typeof DataLoadersCfg;

/**
 * Get DataLoader instance, global o fieldNode specific
 */
function getDataLoader(
  entityName: keyof typeof DataLoadersCfg,
  context: Record<string, any>,
  info: GraphQLResolveInfo
) {
  if (!context.dataLoaders) context.dataLoaders = new WeakMap();
  const { dataLoaders } = context;

  // determine proper key in Context for DataLoader
  const cfg = DataLoadersCfg[entityName];
  let contextKey: any;
  if (cfg.kind === DataLoaderKind.FieldNode) {
    // available for only current fieldNode
    contextKey = info.fieldNodes;
  } else {
    // available for all field levels
    contextKey = cfg;
  }

  // get or create DataLoader in GraphQL context
  let dl: DataLoader<any, any> = dataLoaders.get(contextKey);
  if (!dl) {
    dl = cfg.init(info);
    dataLoaders.set(contextKey, dl);
  }
  return dl;
}

/**
 * Create resolve method which loads many ids records via DataLoader
 * @example
 *   resolve: resolveManyViaDL('ContactID', (s) => s.authorIds)
 */
export function resolveOneViaDL(
  entityName: DataLoaderEntityNames,
  idGetter: (s, a, c, i) => string
) {
  return (source, args, context, info) => {
    const id = idGetter(source, args, context, info);
    if (!id) return null;
    return getDataLoader(entityName, context, info).load(id);
  };
}

/**
 * Create resolve method which loads many ids records via DataLoader
 * @example
 *   resolve: resolveManyViaDL('ContactID', (s) => s.authorIds)
 */
export function resolveManyViaDL(
  entityName: DataLoaderEntityNames,
  idsGetter: (s, a, c, i) => string[]
) {
  return (source, args, context, info) => {
    let ids = idsGetter(source, args, context, info);
    if (!ids) return [];
    if (!Array.isArray(ids)) ids = [ids];
    return getDataLoader(entityName, context, info).loadMany(ids);
  };
}

// Read more https://github.com/nodkz/conf-talks/tree/master/articles/graphql/dataloader
export function dataLoaderLoadById(
  id: string,
  entityName: DataLoaderEntityNames,
  context: Record<string, any>,
  info: GraphQLResolveInfo
) {
  return getDataLoader(entityName, context, info).load(id);
}

/**
 * Load many ids records via DataLoader
 *
 * @example
 *   resolve: (s, a, c, i) => dataLoaderLoadMany(s.authorIds, 'ContactID', c, i),
 */
export function dataLoaderLoadMany(
  ids: string[],
  entityName: DataLoaderEntityNames,
  context: Record<string, any>,
  info: GraphQLResolveInfo
) {
  return getDataLoader(entityName, context, info).loadMany(ids);
}
