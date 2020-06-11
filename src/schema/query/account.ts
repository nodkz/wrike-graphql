import { accountFindOne } from 'app/vendor/account/accountFindOne';
import { AccountTC } from 'app/schema/entities/AccountTC';
import { FieldConfig } from 'app/schema/definitions';
import { KeyValueInput } from '../types/inputs/KeyValueInput';

export default {
  type: AccountTC,
  args: {
    filter: AccountTC.schemaComposer.createInputTC({
      name: 'AccountFilter',
      fields: {
        metadata: KeyValueInput,
      },
    }),
  },
  resolve: (_, { filter }, context, info) => {
    return accountFindOne({ filter, info }, context);
  },
} as FieldConfig;
