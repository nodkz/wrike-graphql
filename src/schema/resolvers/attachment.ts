import { resolveManyViaDL, resolveOneViaDL } from 'app/schema/dataLoaders';
import { ObjectTypeComposerFieldConfigDefinition } from 'graphql-compose';
import { AttachmentTC } from '../entities/AttachmentTC';
import { attachmentFindByIds } from 'app/vendor/attachment/attachmentFindByIds';

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
