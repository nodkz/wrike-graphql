import { findMany } from 'app/vendor/contact/findMany';
import { ContactTC } from 'app/schema/entities/ContactTC';
import { FieldConfig } from 'app/schema/definitions';
import { KeyValueITC } from '../types/KeyValueITC';

export default {
  type: ContactTC.List,
  args: {
    filter: ContactTC.schemaComposer.createInputTC({
      name: 'ContactFindManyFilter',
      fields: {
        me: 'Boolean',
        metadata: KeyValueITC,
        deleted: 'Boolean',
      },
    }),
  },
  resolve: (_, { filter }, context, info) => {
    return findMany({ filter, info });
  },
} as FieldConfig;
