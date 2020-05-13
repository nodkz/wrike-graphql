import { TaskTC } from '../entities/TaskTC';
import { FieldConfig } from '../definitions';
import { remove, TaskRemoveArgs } from 'app/vendor/task/remove';
import { TaskID } from '../types/Scalars';

export default {
  type: TaskTC,
  args: {
    id: TaskID.NonNull,
  },
  resolve: (_, args) => {
    return remove(args);
  },
} as FieldConfig<TaskRemoveArgs>;
