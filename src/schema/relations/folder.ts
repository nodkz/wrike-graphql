import { FolderTC } from 'app/schema/entities/FolderTC';
import { folderFindByIds } from 'app/vendor/folder/folderFindByIds';
import { resolveManyViaDL, resolveOneViaDL } from 'app/schema/dataLoaders';
import { ObjectTypeComposerFieldConfigDefinition } from 'graphql-compose';
import { folderFindMany } from 'app/vendor/folder/folderFindMany';
import { KeyValueInput } from '../types/inputs/KeyValueInput';
import { CustomFieldFilterInput } from '../types/inputs/CustomFieldFilterInput';
import { DateTimeRangeInput } from '../types/inputs/DateTimeRangeInput';

export function getRelationFolderIds(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => FolderTC.NonNull.List,
    resolve: process.env.DISABLE_DATALOADERS
      ? (source, _, __, info) => folderFindByIds({ ids: source[sourceFieldName], info })
      : resolveManyViaDL('FolderID', (s) => s[sourceFieldName]),
    projection: { [sourceFieldName]: 1 },
    extensions: {
      complexity: ({ childComplexity }) => childComplexity * 10,
    },
  };
}

export function getRelationFolderId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => FolderTC,
    resolve: process.env.DISABLE_DATALOADERS
      ? async (source, _, __, info) => {
          const records = await folderFindByIds({ ids: source[sourceFieldName], info });
          return records?.[0];
        }
      : resolveOneViaDL('FolderID', (s) => s[sourceFieldName]),
    projection: { [sourceFieldName]: 1 },
  };
}

const FolderFilterByRelationSpaceId = FolderTC.schemaComposer.createInputTC({
  name: 'FolderFilterByRelationSpaceId',
  fields: {
    descendants: {
      type: 'Boolean',
      defaultValue: true,
      description: 'Adds all descendant folders to search scope',
    },
    metadata: {
      type: KeyValueInput,
      description: 'Folders metadata filter',
    },
    customField: {
      type: CustomFieldFilterInput,
      description: 'Custom field filter',
    },
    updatedDate: {
      type: DateTimeRangeInput,
      description: 'Updated date filter, range',
    },
    project: {
      type: 'Boolean',
      description: 'Get only projects (true) / only folders (false)',
    },
    deleted: {
      type: 'Boolean',
      description: 'Get folders from Root (false) / Recycle Bin (true)',
    },
  },
});

export function getRelationFoldersBySpaceId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => FolderTC.NonNull.List,
    args: {
      filter: FolderFilterByRelationSpaceId,
    },
    resolve: (source, args, __, info) => {
      return folderFindMany({
        filter: {
          spaceId: source[sourceFieldName],
          ...args.filter,
        },
        info,
      });
    },
    projection: { [sourceFieldName]: 1 },
    extensions: {
      complexity: ({ childComplexity }) => childComplexity * 10,
    },
  };
}
