import { UserTC } from 'app/schema/entities/UserTC';
import { findById } from 'app/vendor/user/findById';
import { ContactID } from 'app/schema/types/Scalars';

export default {
  args: { id: ContactID },
  type: UserTC,
  resolve: (_, args) => {
    return findById(args);
  },
};
