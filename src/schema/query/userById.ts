import { findById } from 'app/vendor/user/findById';
import { UserTC } from '../entities/UserTC';

export default {
  args: { id: 'String' },
  type: UserTC,
  resolve: (_, args) => {
    return findById(args);
  },
};
