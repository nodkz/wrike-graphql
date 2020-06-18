import { FolderTC } from 'app/schema/entities/FolderTC';
import { FieldConfig } from 'app/schema/definitions';
import { FolderID } from 'app/schema/types/Scalars';
import { folderUpdate } from 'app/vendor/folder/folderUpdate';
import { FolderInput } from 'app/schema/types/inputs/FolderInput';

export const FolderUpdateInput = FolderInput.clone('FolderUpdateInput').removeField('shareds');

export default {
  type: FolderTC,
  args: {
    folderId: FolderID.NonNull,
    parentFolderIds: FolderID.NonNull.List.NonNull,
  },
  resolve: (_, args, context) => {
    return folderUpdate(
      {
        folderId: args.folderId,
        folder: {
          removeParents: args.parentFolderIds,
        },
      },
      context
    );
  },
} as FieldConfig;
