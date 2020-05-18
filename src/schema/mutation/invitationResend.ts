import { FieldConfig } from 'app/schema/definitions';
import { InvitationID } from 'app/schema/types/Scalars';
import { invitationUpdate } from 'app/vendor/invitation/invitationUpdate';
import { InvitationTC } from 'app/schema/entities/InvitationTC';

export default {
  type: InvitationTC,
  args: {
    id: InvitationID.NonNull,
  },
  resolve: (_, args) => {
    return invitationUpdate({ id: args.id, invitation: { resend: true } });
  },
} as FieldConfig;
