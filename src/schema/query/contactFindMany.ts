import { findMany } from 'app/vendor/contact/findMany';
import { ContactTC } from 'app/schema/entities/ContactTC';
import { FieldConfig } from 'app/schema/definitions';
import { KeyValueInput } from '../types/inputs/KeyValueInput';

export default {
  type: ContactTC.List,
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
    return findMany({ filter, info });
  },
} as FieldConfig;
