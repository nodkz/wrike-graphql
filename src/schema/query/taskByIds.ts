import { TaskTC } from 'app/schema/entities/TaskTC';
import { FieldConfig } from 'app/schema/definitions';
import { findByIds } from 'app/vendor/task/findByIds';

export default {
  type: [TaskTC],
  args: { ids: '[String!]!' },
  resolve: (_, args) => {
    return findByIds(args);
  },
} as FieldConfig<{ ids: string[] }>;
