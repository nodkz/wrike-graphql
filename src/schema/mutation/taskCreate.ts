import { TaskTC } from '../entities/TaskTC';
import { FieldConfig } from '../definitions';
import { create, TaskCreateArgs } from 'app/vendor/task/create';
import { FolderID } from '../types/Scalars';
import { TaskInput } from '../types/TaskInput';

export default {
  type: TaskTC,
  args: {
    folderId: FolderID.getTypeNonNull(),
    task: TaskInput,
  },
  resolve: (_, args) => {
    return create(args);
  },
} as FieldConfig<TaskCreateArgs>;
