import { TaskTC } from 'app/schema/entities/TaskTC';
import { FieldConfig } from 'app/schema/definitions';
import { TaskID } from 'app/schema/types/Scalars';
import { taskUpdate, TaskUpdateArgs } from 'app/vendor/task/taskUpdate';
import { TaskCreateInput } from './taskCreate';

export const TaskUpdateInput = TaskCreateInput.clone('TaskUpdateInput')
  .removeField(['parents', 'shareds', 'responsibles', 'followers'])
  .makeFieldNullable('title');

export default {
  type: TaskTC,
  args: {
    id: TaskID.NonNull,
    task: TaskUpdateInput.NonNull,
  },
  resolve: (_, args, context) => {
    return taskUpdate(args, context);
  },
} as FieldConfig<TaskUpdateArgs>;
