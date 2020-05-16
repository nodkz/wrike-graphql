import { UserTC } from 'app/schema/entities/UserTC';
import { findById } from 'app/vendor/user/findById';

export default {
  args: { id: 'String' },
  type: UserTC,
  resolve: (_, args) => {
    return findById(args);
  },
};
