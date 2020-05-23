import { FolderTC } from 'app/schema/entities/FolderTC';
import { FieldConfig } from 'app/schema/definitions';
import { FolderID } from 'app/schema/types/Scalars';
import { commentRemove, RemoveArgs } from 'app/vendor/comment/commentRemove';

export default {
  type: FolderTC,
  args: {
    id: FolderID.NonNull,
  },
  resolve: (_, args) => {
    return commentRemove(args);
  },
} as FieldConfig<RemoveArgs>;
