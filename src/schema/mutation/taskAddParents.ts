import { TaskTC } from 'app/schema/entities/TaskTC';
import { FieldConfig } from 'app/schema/definitions';
import { TaskID, FolderID } from 'app/schema/types/Scalars';
import { taskUpdate } from 'app/vendor/task/taskUpdate';

export default {
  type: TaskTC,
  args: {
    id: TaskID.NonNull,
    parents: FolderID.NonNull.List.NonNull,
  },
  resolve: (_, args, context) => {
    return taskUpdate(
      {
        id: args.id,
        task: { addParents: args.parents },
      },
      context
    );
  },
} as FieldConfig;
