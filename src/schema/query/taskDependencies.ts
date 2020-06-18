import { FieldConfig } from 'app/schema/definitions';
import { TaskID } from 'app/schema/types/Scalars';
import { DependencyTC } from 'app/schema/entities/DependencyTC';
import { dependencyForTask, FindOpts } from 'app/vendor/dependency/dependencyForTask';

export default {
  type: DependencyTC.NonNull.List,
  args: {
    taskId: TaskID.NonNull,
  },
  resolve: (_, args, context) => {
    return dependencyForTask(args, context);
  },
  extensions: {
    complexity: ({ childComplexity }) => childComplexity * 10,
  },
} as FieldConfig<FindOpts>;
