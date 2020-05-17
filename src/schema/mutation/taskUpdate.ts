import { TaskTC } from 'app/schema/entities/TaskTC';
import { FieldConfig } from 'app/schema/definitions';
import { TaskID } from 'app/schema/types/Scalars';
import { update, TaskUpdateArgs } from 'app/vendor/task/update';
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
  resolve: (_, args) => {
    return update(args);
  },
} as FieldConfig<TaskUpdateArgs>;
