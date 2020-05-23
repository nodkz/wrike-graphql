import { FieldConfig } from 'app/schema/definitions';
import { FolderID } from 'app/schema/types/Scalars';
import { folderCopyAsync, Args } from 'app/vendor/folder/folderCopyAsync';
import { AsyncJobTC } from '../entities/AsyncJobTC';
import { FolderCopyOptsInput } from '../types/inputs/FolderCopyOptsInput';

export default {
  type: AsyncJobTC,
  description: 'Copy folder subtree, returns async job.',
  args: {
    folderId: FolderID.NonNull,
    options: FolderCopyOptsInput.NonNull,
  },
  resolve: (_, args) => {
    return folderCopyAsync(args);
  },
} as FieldConfig<Args>;
