import { findMany } from 'app/vendor/invitation/findMany';
import { InvitationTC } from 'app/schema/entities/InvitationTC';
import { FieldConfig } from 'app/schema/definitions';

export default {
  type: InvitationTC.List.NonNull,
  resolve: () => {
    return findMany();
  },
} as FieldConfig;
