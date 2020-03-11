import { findByIds } from 'app/vendor/task/findByIds';
import { TaskTC } from '../entities/TaskTC';

export default {
  args: { ids: '[String!]!' },
  type: [TaskTC],
  resolve: (_, args) => {
    return findByIds(args);
  },
};
