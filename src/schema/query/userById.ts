import { UserTC } from 'app/schema/entities/UserTC';
import { userFindById } from 'app/vendor/user/userFindById';
import { ContactID } from 'app/schema/types/Scalars';

export default {
  args: { id: ContactID },
  type: UserTC,
  resolve: (_, args) => {
    return userFindById(args);
  },
};
