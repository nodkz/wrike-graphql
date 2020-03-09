import { TaskTC } from 'app/entities/task/TaskTC';
import { findMany } from 'app/entities/task/findMany';

export default {
  type: [TaskTC],
  args: { limit: { type: 'Int', default: 5 } },
  resolve: (_, args) => {
    // TODO: projection and other args for `findMany` method
    return findMany({ limit: args.limit });
  },
};
