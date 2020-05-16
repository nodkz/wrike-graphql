import { TaskTC } from 'app/schema/entities/TaskTC';
import { FieldConfig } from 'app/schema/definitions';
import { TaskID } from 'app/schema/types/Scalars';
import { TaskUpdateInput } from 'app/schema/types/TaskInputs';
import { update, TaskUpdateArgs } from 'app/vendor/task/update';

export default {
  type: TaskTC,
  args: {
    id: TaskID.NonNull,
    task: TaskUpdateInput.NonNull,
  },
  resolve: (_, args) => {
    return update(args);
  },
} as FieldConfig<TaskUpdateArgs>;
