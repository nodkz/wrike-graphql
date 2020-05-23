import { FieldConfig } from 'app/schema/definitions';
import { FolderID } from 'app/schema/types/Scalars';
import { FolderCopyOptsInput } from '../types/inputs/FolderCopyOptsInput';
import { folderCopy, Args } from 'app/vendor/folder/folderCopy';
import { FolderTC } from '../entities/FolderTC';

export default {
  type: FolderTC,
  description: 'Copy folder subtree, returns parent folder subtree.',
  args: {
    folderId: FolderID.NonNull,
    options: FolderCopyOptsInput.NonNull,
  },
  resolve: (_, args) => {
    return folderCopy(args);
  },
} as FieldConfig<Args>;
