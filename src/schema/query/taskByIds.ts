import { findByIds } from 'app/vendor/task/findByIds';
import { TaskTC } from '../entities/TaskTC';
import { FieldConfig } from '../definitions';

export default {
  type: [TaskTC],
  args: { ids: '[String!]!' },
  resolve: (_, args) => {
    return findByIds(args);
  },
} as FieldConfig<{ ids: string[] }>;
