import { resolveManyViaDL, resolveOneViaDL } from 'app/schema/dataLoaders';
import { ObjectTypeComposerFieldConfigDefinition } from 'graphql-compose';
import { CommentTC } from '../entities/CommentTC';
import { commentFindByIds } from 'app/vendor/comment/commentFindByIds';
import { commentFindMany } from 'app/vendor/comment/commentFindMany';

export function getRelationCommentIds(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => CommentTC.NonNull.List,
    resolve: process.env.DISABLE_DATALOADERS
      ? (source) => commentFindByIds({ ids: source[sourceFieldName] })
      : resolveManyViaDL('CommentID', (s) => s[sourceFieldName]),
    projection: { [sourceFieldName]: 1 },
  };
}

export function getRelationCommentId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => CommentTC,
    resolve: process.env.DISABLE_DATALOADERS
      ? async (source) => {
          const records = await commentFindByIds({ ids: source[sourceFieldName] });
          return records?.[0];
        }
      : resolveOneViaDL('CommentID', (s) => s[sourceFieldName]),
    projection: { [sourceFieldName]: 1 },
  };
}

export function getRelationCommentsByFolderId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => CommentTC.NonNull.List,
    args: {
      limit: { type: 'Int', defaultValue: 10 },
      plainText: 'Boolean',
    },
    resolve: (source, args) => {
      return commentFindMany({
        filter: { folderId: source[sourceFieldName] },
        limit: args.limit,
        plainText: args.plainText,
      });
    },
    projection: { [sourceFieldName]: 1 },
  };
}

export function getRelationCommentsByTaskId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => CommentTC.NonNull.List,
    resolve: (source) => {
      return commentFindMany({
        filter: { taskId: source[sourceFieldName] },
      });
    },
    projection: { [sourceFieldName]: 1 },
  };
}
