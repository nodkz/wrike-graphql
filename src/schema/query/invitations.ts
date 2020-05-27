import { invitationFindMany } from 'app/vendor/invitation/invitationFindMany';
import { InvitationTC } from 'app/schema/entities/InvitationTC';
import { FieldConfig } from 'app/schema/definitions';

export default {
  type: InvitationTC.NonNull.List,
  resolve: () => {
    return invitationFindMany();
  },
} as FieldConfig;