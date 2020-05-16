import { ContactTC } from 'app/schema/entities/ContactTC';
import { FieldConfig } from 'app/schema/definitions';
import { ContactID } from 'app/schema/types/Scalars';
import { update, ContactUpdateArgs } from 'app/vendor/contact/update';
import { KeyValueITC } from '../types/KeyValueITC';

export default {
  type: ContactTC,
  args: {
    id: ContactID.NonNull,
    metadata: KeyValueITC.NonNull.List.NonNull,
  },
  resolve: (_, args) => {
    return update(args);
  },
} as FieldConfig<ContactUpdateArgs>;
