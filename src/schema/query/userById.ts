import { UserTC } from 'app/schema/entities/UserTC';
import { userFindById } from 'app/vendor/user/userFindById';
import { ContactID } from 'app/schema/types/Scalars';

export default {
  type: UserTC,
  args: {
    id: ContactID.NonNull,
  },
  resolve: (_, args) => {
    return userFindById(args);
  },
};
