import { FolderTC } from 'app/schema/entities/FolderTC';
import { folderFindByIds } from 'app/vendor/folder/folderFindByIds';
import { resolveManyViaDL, resolveOneViaDL } from 'app/schema/dataLoaders';
import { ObjectTypeComposerFieldConfigDefinition } from 'graphql-compose';

export function getRelationFolderIds(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => FolderTC.NonNull.List,
    resolve: process.env.DISABLE_DATALOADERS
      ? (source, _, __, info) => folderFindByIds({ ids: source[sourceFieldName], info })
      : resolveManyViaDL('FolderID', (s) => s[sourceFieldName]),
    projection: { [sourceFieldName]: 1 },
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
