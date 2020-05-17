import { FieldConfig } from 'app/schema/definitions';
import { InvitationID } from 'app/schema/types/Scalars';
import { update } from 'app/vendor/invitation/update';
import { InvitationTC } from 'app/schema/entities/InvitationTC';

export default {
  type: InvitationTC,
  args: {
    id: InvitationID.NonNull,
  },
  resolve: (_, args) => {
    return update({ id: args.id, invitation: { resend: true } });
  },
} as FieldConfig;
