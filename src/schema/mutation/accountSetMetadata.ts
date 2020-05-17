import { AccountTC } from 'app/schema/entities/AccountTC';
import { FieldConfig } from 'app/schema/definitions';
import { update, UpdateArgs } from 'app/vendor/account/update';
import { KeyValueITC } from '../types/KeyValueITC';

export default {
  type: AccountTC,
  args: {
    metadata: KeyValueITC.NonNull.List.NonNull,
  },
  resolve: (_, args) => {
    return update(args);
  },
} as FieldConfig<UpdateArgs>;
