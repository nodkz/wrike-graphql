import { FieldConfig } from 'app/schema/definitions';
import { InvitationID } from 'app/schema/types/Scalars';
import { remove } from 'app/vendor/invitation/remove';
import { InvitationTC } from 'app/schema/entities/InvitationTC';

export default {
  type: InvitationTC,
  args: {
    id: InvitationID.NonNull,
  },
  resolve: (_, args) => {
    return remove({ id: args.id });
  },
} as FieldConfig;
