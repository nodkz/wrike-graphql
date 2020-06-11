import { FieldConfig } from 'app/schema/definitions';
import { AsyncJobTC } from '../entities/AsyncJobTC';
import { asyncJobFindById, FindArgs } from 'app/vendor/asyncJob/asyncJobFindById';
import { AsyncJobID } from '../types/Scalars';

export default {
  type: AsyncJobTC,
  args: {
    id: AsyncJobID.NonNull,
  },
  resolve: (_, args, context) => {
    return asyncJobFindById(args, context);
  },
} as FieldConfig<FindArgs>;
