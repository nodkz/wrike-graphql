import { FolderTC } from 'app/schema/entities/FolderTC';
import { FieldConfig } from 'app/schema/definitions';
import { FolderID } from 'app/schema/types/Scalars';
import { folderCreate, CreateArgs } from 'app/vendor/folder/folderCreate';
import { FolderInput } from 'app/schema/types/inputs/FolderInput';

export const FolderCreateInput = FolderInput.clone('FolderCreateInput').makeRequired('title');

export default {
  type: FolderTC,
  description:
    'Create a folder within a folder. Specify virtual rootFolderId in order to create a folder in the account root.',
  args: {
    parentFolderId: FolderID.NonNull,
    folder: FolderCreateInput.NonNull,
  },
  resolve: (_, args, context) => {
    return folderCreate(args, context);
  },
} as FieldConfig<CreateArgs>;
