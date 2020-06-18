import { FieldConfig } from 'app/schema/definitions';
import { AsyncJobTC } from 'app/schema/entities/AsyncJobTC';
import { asyncJobFindById, FindArgs } from 'app/vendor/asyncJob/asyncJobFindById';
import { AsyncJobID } from 'app/schema/types/Scalars';

export default {
  type: AsyncJobTC,
  args: {
    id: AsyncJobID.NonNull,
  },
  resolve: (_, args, context) => {
    return asyncJobFindById(args, context);
  },
} as FieldConfig<FindArgs>;
