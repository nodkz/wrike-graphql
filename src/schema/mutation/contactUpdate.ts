import { ContactTC } from 'app/schema/entities/ContactTC';
import { FieldConfig } from 'app/schema/definitions';
import { ContactID } from 'app/schema/types/Scalars';
import { update, ContactUpdateArgs } from 'app/vendor/contact/update';
import { KeyValueInput } from '../types/inputs/KeyValueInput';

export default {
  type: ContactTC,
  args: {
    id: ContactID.NonNull,
    metadata: KeyValueInput.NonNull.List.NonNull,
  },
  resolve: (_, args) => {
    return update(args);
  },
} as FieldConfig<ContactUpdateArgs>;
