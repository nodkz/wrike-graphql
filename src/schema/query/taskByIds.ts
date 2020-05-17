import { TaskTC } from 'app/schema/entities/TaskTC';
import { FieldConfig } from 'app/schema/definitions';
import { findByIds } from 'app/vendor/task/findByIds';
import { TaskID } from 'app/schema/types/Scalars';

export default {
  type: [TaskTC],
  args: { ids: TaskID.NonNull.List.NonNull },
  resolve: (_, args, context, info) => {
    return findByIds({ ids: args.ids, info });
  },
} as FieldConfig<{ ids: string[] }>;
