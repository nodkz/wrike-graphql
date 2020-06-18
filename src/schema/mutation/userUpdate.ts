import { UserTC } from 'app/schema/entities/UserTC';
import { FieldConfig } from 'app/schema/definitions';
import { ContactID, AccountID } from 'app/schema/types/Scalars';
import { userUpdate, UserUpdateArgs } from 'app/vendor/user/userUpdate';
import { UserRoleEnum } from 'app/schema/types/Enums';

export default {
  type: UserTC,
  args: {
    id: ContactID.NonNull,
    profile: UserTC.schemaComposer.createInputTC({
      name: 'UpdateUserProfileInput',
      fields: {
        accountId: AccountID,
        role: UserRoleEnum,
        external: 'Boolean',
      },
    }),
  },
  resolve: (_, args, context) => {
    return userUpdate(args, context);
  },
} as FieldConfig<UserUpdateArgs>;
