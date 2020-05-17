import { findOne } from 'app/vendor/account/findOne';
import { AccountTC } from 'app/schema/entities/AccountTC';
import { FieldConfig } from 'app/schema/definitions';
import { KeyValueITC } from '../types/KeyValueITC';

export default {
  type: AccountTC,
  args: {
    filter: AccountTC.schemaComposer.createInputTC({
      name: 'AccountFilter',
      fields: {
        metadata: KeyValueITC,
      },
    }),
  },
  resolve: (_, { filter }, context, info) => {
    return findOne({ filter, info });
  },
} as FieldConfig;
