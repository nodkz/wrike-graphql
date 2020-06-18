import { TaskTC } from 'app/schema/entities/TaskTC';
import { FieldConfig } from 'app/schema/definitions';
import { TaskID } from 'app/schema/types/Scalars';
import { taskRemove, RemoveArgs } from 'app/vendor/task/taskRemove';

export default {
  type: TaskTC,
  args: {
    id: TaskID.NonNull,
  },
  resolve: (_, args, context) => {
    return taskRemove(args, context);
  },
} as FieldConfig<RemoveArgs>;
