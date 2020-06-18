import { FieldConfig } from 'app/schema/definitions';
import { InvitationID } from 'app/schema/types/Scalars';
import { invitationUpdate, UpdateArgs } from 'app/vendor/invitation/invitationUpdate';
import { InvitationCreateInput } from './invitationCreate';
import { InvitationTC } from 'app/schema/entities/InvitationTC';

export const InvitationUpdateInput = InvitationCreateInput.clone(
  'InvitationUpdateInput'
).removeOtherFields(['role', 'external']);

export default {
  type: InvitationTC,
  args: {
    id: InvitationID.NonNull,
    invitation: InvitationUpdateInput.NonNull,
  },
  resolve: (_, args, context) => {
    return invitationUpdate(args, context);
  },
} as FieldConfig<UpdateArgs>;
