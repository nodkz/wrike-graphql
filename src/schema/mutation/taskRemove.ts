import { TaskTC } from 'app/schema/entities/TaskTC';
import { FieldConfig } from 'app/schema/definitions';
import { TaskID } from 'app/schema/types/Scalars';
import { taskRemove, TaskRemoveArgs } from 'app/vendor/task/taskRemove';

export default {
  type: TaskTC,
  args: {
    id: TaskID.NonNull,
  },
  resolve: (_, args) => {
    return taskRemove(args);
  },
} as FieldConfig<TaskRemoveArgs>;
