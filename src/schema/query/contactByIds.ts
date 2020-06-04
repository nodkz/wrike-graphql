import { contactFindByIds } from 'app/vendor/contact/contactFindByIds';
import { ContactTC } from 'app/schema/entities/ContactTC';
import { ContactID } from 'app/schema/types/Scalars';
import { FieldConfig } from 'app/schema/definitions';

export default {
  type: ContactTC.NonNull.List,
  args: {
    ids: ContactID.NonNull.List.NonNull,
  },
  resolve: (_, args, context, info) => {
    return contactFindByIds({ ids: args.ids, info });
  },
  extensions: {
    complexity: ({ args, childComplexity }) => childComplexity * (args.ids.length || 100),
  },
} as FieldConfig;
