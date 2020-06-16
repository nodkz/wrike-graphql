/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import DataLoader from 'dataloader';
import { GraphQLResolveInfo, GraphQLFieldResolver } from 'graphql';
import { approvalDLG } from './approvalDLG';
import { attachmentDLG } from './attachmentDLG';
import { commentDLG } from './commentDLG';
import { contactDL } from './contactDL';
import { customFieldDLG } from './customFieldDLG';
import { dependencyDLG } from './dependencyDLG';
import { folderDL } from './folderDL';
import { taskDL } from './taskDL';
import { timelogDLG } from './timelogDLG';
import { accountDL } from './accountDL';
import { timelogCategoryDLG } from './timelogCategoryDLG';
import { workScheduleDLG } from './workScheduleDLG';

enum DataLoaderKind {
  OperationGlobal,
  FieldNode,
}

type DLCfg =
  | {
      init: (context: any) => DataLoader<any, any>;
      kind: DataLoaderKind.OperationGlobal;
    }
  | {
      init: (context: any, info: GraphQLResolveInfo) => DataLoader<any, any>;
      kind: DataLoaderKind.FieldNode;
    };

const DataLoadersCfg = {
  // Global DataLoaders
  ApprovalID: { init: approvalDLG, kind: DataLoaderKind.OperationGlobal } as DLCfg,
  AttachmentID: { init: attachmentDLG, kind: DataLoaderKind.OperationGlobal } as DLCfg,
  CommentID: { init: commentDLG, kind: DataLoaderKind.OperationGlobal } as DLCfg,
  DependencyID: { init: dependencyDLG, kind: DataLoaderKind.OperationGlobal } as DLCfg,
  CustomFieldID: { init: customFieldDLG, kind: DataLoaderKind.OperationGlobal } as DLCfg,
  TimelogID: { init: timelogDLG, kind: DataLoaderKind.OperationGlobal } as DLCfg,
  TimelogCategoryID: { init: timelogCategoryDLG, kind: DataLoaderKind.OperationGlobal } as DLCfg,
  WorkScheduleID: { init: workScheduleDLG, kind: DataLoaderKind.OperationGlobal } as DLCfg,
  // FieldNodes specific loaders
  AccountID: { init: accountDL, kind: DataLoaderKind.FieldNode } as DLCfg,
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
    dl = cfg.init(context, info);
    dataLoaders.set(contextKey, dl);
  }
  return dl;
}

/**
 * Create resolve method which loads many ids records via DataLoader
 * @example
 *   resolve: resolveOneViaDL('ContactID', (s) => s.authorId)
 */
export function resolveOneViaDL(
  entityName: DataLoaderEntityNames,
  idGetter: (s, a, c, i) => string
): GraphQLFieldResolver<any, any> {
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
): GraphQLFieldResolver<any, any> {
  return (source, args, context, info) => {
    let ids = idsGetter(source, args, context, info);
    if (!ids) return [];
    if (!Array.isArray(ids)) ids = [ids];
    return getDataLoader(entityName, context, info).loadMany(ids);
  };
}
