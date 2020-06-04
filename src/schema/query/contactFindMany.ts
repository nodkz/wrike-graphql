import { contactFindMany } from 'app/vendor/contact/contactFindMany';
import { ContactTC } from 'app/schema/entities/ContactTC';
import { FieldConfig } from 'app/schema/definitions';
import { KeyValueInput } from '../types/inputs/KeyValueInput';

export default {
  type: ContactTC.NonNull.List,
  args: {
    filter: ContactTC.schemaComposer.createInputTC({
      name: 'ContactFindManyFilter',
      fields: {
        me: 'Boolean',
        metadata: KeyValueInput,
        deleted: 'Boolean',
      },
    }),
  },
  resolve: (_, { filter }, context, info) => {
    return contactFindMany({ filter, info });
  },
  extensions: {
    complexity: ({ childComplexity }) => childComplexity * 100,
  },
} as FieldConfig;
