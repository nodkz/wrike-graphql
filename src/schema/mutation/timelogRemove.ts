import { FieldConfig } from 'app/schema/definitions';
import { TimelogID } from 'app/schema/types/Scalars';
import { TimelogTC } from '../entities/TimelogTC';
import { timelogRemove, RemoveArgs } from 'app/vendor/timelog/timelogRemove';

export default {
  type: TimelogTC,
  args: {
    id: TimelogID.NonNull,
  },
  resolve: (_, args, context) => {
    return timelogRemove(args, context);
  },
} as FieldConfig<RemoveArgs>;
