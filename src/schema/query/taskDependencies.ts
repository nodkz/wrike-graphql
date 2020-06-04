import { FieldConfig } from 'app/schema/definitions';
import { TaskID } from 'app/schema/types/Scalars';
import { DependencyTC } from '../entities/DependencyTC';
import { dependencyForTask, FindOpts } from 'app/vendor/dependency/dependencyForTask';

export default {
  type: DependencyTC.NonNull.List,
  args: {
    taskId: TaskID.NonNull,
  },
  resolve: (_, args) => {
    return dependencyForTask(args);
  },
  extensions: {
    complexity: ({ childComplexity }) => childComplexity * 10,
  },
} as FieldConfig<FindOpts>;
