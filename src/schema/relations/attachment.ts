import { resolveManyViaDL, resolveOneViaDL } from 'app/schema/dataLoaders';
import { ObjectTypeComposerFieldConfigDefinition } from 'graphql-compose';
import { AttachmentTC } from '../entities/AttachmentTC';
import { attachmentFindByIds } from 'app/vendor/attachment/attachmentFindByIds';
import { attachmentFindMany } from 'app/vendor/attachment/attachmentFindMany';
import { DateTimeRangeInput } from '../types/inputs/DateTimeRangeInput';

const AttachmentFilterByRelation = AttachmentTC.schemaComposer.createInputTC({
  name: 'AttachmentFilterByRelation',
  fields: {
    createdDate: {
      type: DateTimeRangeInput,
      description: 'Get attachments with previous versions',
    },
  },
});

export function getRelationAttachmentIds(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => AttachmentTC.NonNull.List,
    resolve: process.env.DISABLE_DATALOADERS
      ? (source, _, context) => attachmentFindByIds({ ids: source[sourceFieldName] }, context)
      : resolveManyViaDL('AttachmentID', (s) => s[sourceFieldName]),
    projection: { [sourceFieldName]: 1 },
    extensions: {
      complexity: ({ childComplexity }) => childComplexity * 10,
    },
  };
}

export function getRelationAttachmentId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => AttachmentTC,
    resolve: process.env.DISABLE_DATALOADERS
      ? async (source, _, context) => {
          const records = await attachmentFindByIds({ ids: source[sourceFieldName] }, context);
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
    args: {
      filter: AttachmentFilterByRelation,
      versions: {
        type: 'Boolean',
        description: 'Get attachments with previous versions',
      },
    },
    resolve: (source, args, context, info) => {
      return attachmentFindMany(
        {
          filter: { ...args.filter, folderId: source[sourceFieldName] },
          versions: args.versions,
          info,
        },
        context
      );
    },
    projection: { [sourceFieldName]: 1 },
    extensions: {
      complexity: ({ childComplexity }) => childComplexity * 10,
    },
  };
}

export function getRelationAttachmentsByTaskId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => AttachmentTC.NonNull.List,
    args: {
      filter: AttachmentFilterByRelation,
      versions: {
        type: 'Boolean',
        description: 'Get attachments with previous versions',
      },
    },
    resolve: (source, args, context, info) => {
      return attachmentFindMany(
        {
          filter: { ...args.filter, taskId: source[sourceFieldName] },
          versions: args.versions,
          info,
        },
        context
      );
    },
    projection: { [sourceFieldName]: 1 },
    extensions: {
      complexity: ({ childComplexity }) => childComplexity * 10,
    },
  };
}
