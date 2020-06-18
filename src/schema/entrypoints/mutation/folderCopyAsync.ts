import { FieldConfig } from 'app/schema/definitions';
import { FolderID } from 'app/schema/types/Scalars';
import { folderCopyAsync, Args } from 'app/vendor/folder/folderCopyAsync';
import { AsyncJobTC } from 'app/schema/entities/AsyncJobTC';
import { FolderCopyOptsInput } from 'app/schema/types/inputs/FolderCopyOptsInput';

export default {
  type: AsyncJobTC,
  description: 'Copy folder subtree, returns async job.',
  args: {
    folderId: FolderID.NonNull,
    options: FolderCopyOptsInput.NonNull,
  },
  resolve: (_, args, context) => {
    return folderCopyAsync(args, context);
  },
} as FieldConfig<Args>;
