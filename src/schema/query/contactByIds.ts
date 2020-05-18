import { contactFindByIds } from 'app/vendor/contact/contactFindByIds';
import { ContactTC } from 'app/schema/entities/ContactTC';
import { ContactID } from 'app/schema/types/Scalars';
import { FieldConfig } from 'app/schema/definitions';

export default {
  args: { ids: ContactID.NonNull.List.NonNull },
  type: ContactTC.List,
  resolve: (_, args, context, info) => {
    return contactFindByIds({ ids: args.ids, info });
  },
} as FieldConfig;
