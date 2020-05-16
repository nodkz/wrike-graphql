import { TaskTC } from 'app/schema/entities/TaskTC';
import { FieldConfig } from 'app/schema/definitions';
import { TaskID, FolderID } from 'app/schema/types/Scalars';
import { update } from 'app/vendor/task/update';

export default {
  type: TaskTC,
  args: {
    id: TaskID.NonNull,
    parents: FolderID.NonNull.List.NonNull,
  },
  resolve: (_, args) => {
    return update({ id: args.id, task: { addParents: args.parents } });
  },
} as FieldConfig;
