import { FieldConfig } from 'app/schema/definitions';
import { FolderID } from 'app/schema/types/Scalars';
import { FolderCopyOptsInput } from 'app/schema/types/inputs/FolderCopyOptsInput';
import { folderCopy, Args } from 'app/vendor/folder/folderCopy';
import { FolderTC } from 'app/schema/entities/FolderTC';

export default {
  type: FolderTC,
  description: 'Copy folder subtree, returns parent folder subtree.',
  args: {
    folderId: FolderID.NonNull,
    options: FolderCopyOptsInput.NonNull,
  },
  resolve: (_, args, context) => {
    return folderCopy(args, context);
  },
} as FieldConfig<Args>;
