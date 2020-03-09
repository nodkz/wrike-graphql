import { TaskTC } from 'app/entities/task/TaskTC';
import { findByIds } from 'app/entities/task/findByIds';

export default {
  args: { ids: '[String!]!' },
  type: [TaskTC],
  resolve: (_, args) => {
    return findByIds({ ids: args.ids });
  },
};
