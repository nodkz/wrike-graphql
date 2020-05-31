import { resolveManyViaDL, resolveOneViaDL } from 'app/schema/dataLoaders';
import { ObjectTypeComposerFieldConfigDefinition } from 'graphql-compose';
import { AttachmentTC } from '../entities/AttachmentTC';
import { attachmentFindByIds } from 'app/vendor/attachment/attachmentFindByIds';
import { attachmentFindMany } from 'app/vendor/attachment/attachmentFindMany';

export function getRelationAttachmentIds(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => AttachmentTC.NonNull.List,
    resolve: process.env.DISABLE_DATALOADERS
      ? (source) => attachmentFindByIds({ ids: source[sourceFieldName] })
      : resolveManyViaDL('AttachmentID', (s) => s[sourceFieldName]),
    projection: { [sourceFieldName]: 1 },
  };
}

export function getRelationAttachmentId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => AttachmentTC,
    resolve: process.env.DISABLE_DATALOADERS
      ? async (source) => {
          const records = await attachmentFindByIds({ ids: source[sourceFieldName] });
          return records?.[0];
        }
      : resolveOneViaDL('AttachmentID', (s) => s[sourceFieldName]),
    projection: { [sourceFieldName]: 1 },
  };
}

export function getRelationAttachmentsByFolderId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => AttachmentTC.NonNull.List,
    resolve: (source, _, __, info) => {
      return attachmentFindMany({
        filter: { folderId: source[sourceFieldName] },
        info,
      });
    },
    projection: { [sourceFieldName]: 1 },
  };
}

export function getRelationAttachmentsByTaskId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => AttachmentTC.NonNull.List,
    resolve: (source, _, __, info) => {
      return attachmentFindMany({
        filter: { taskId: source[sourceFieldName] },
        info,
      });
    },
    projection: { [sourceFieldName]: 1 },
  };
}
