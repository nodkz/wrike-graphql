import { TaskTC } from 'app/schema/entities/TaskTC';
import { FieldConfig } from 'app/schema/definitions';
import { FolderID } from 'app/schema/types/Scalars';
import { TaskCreateInput } from 'app/schema/types/TaskInputs';
import { create, TaskCreateArgs } from 'app/vendor/task/create';

export default {
  type: TaskTC,
  args: {
    folderId: FolderID.NonNull,
    task: TaskCreateInput.NonNull,
  },
  resolve: (_, args) => {
    return create(args);
  },
} as FieldConfig<TaskCreateArgs>;
