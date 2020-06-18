import { FieldConfig } from 'app/schema/definitions';
import { InvitationID } from 'app/schema/types/Scalars';
import { invitationRemove } from 'app/vendor/invitation/invitationRemove';
import { InvitationTC } from 'app/schema/entities/InvitationTC';

export default {
  type: InvitationTC,
  args: {
    id: InvitationID.NonNull,
  },
  resolve: (_, args, context) => {
    return invitationRemove({ id: args.id }, context);
  },
} as FieldConfig;
