import { AccountTC } from 'app/schema/entities/AccountTC';
import { FieldConfig } from 'app/schema/definitions';
import { accountUpdate, UpdateArgs } from 'app/vendor/account/accountUpdate';
import { KeyValueInput } from '../types/inputs/KeyValueInput';

export default {
  type: AccountTC,
  args: {
    metadata: KeyValueInput.NonNull.List.NonNull,
  },
  resolve: (_, args) => {
    return accountUpdate(args);
  },
} as FieldConfig<UpdateArgs>;
