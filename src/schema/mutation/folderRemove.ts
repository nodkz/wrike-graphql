import { FolderTC } from 'app/schema/entities/FolderTC';
import { FieldConfig } from 'app/schema/definitions';
import { FolderID } from 'app/schema/types/Scalars';
import { folderRemove, RemoveArgs } from 'app/vendor/folder/folderRemove';

export default {
  type: FolderTC,
  args: {
    id: FolderID.NonNull,
  },
  resolve: (_, args) => {
    return folderRemove(args);
  },
} as FieldConfig<RemoveArgs>;
