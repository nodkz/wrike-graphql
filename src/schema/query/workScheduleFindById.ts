import { WorkScheduleID } from 'app/schema/types/Scalars';
import { WorkScheduleTC } from '../entities/WorkScheduleTC';
import { workScheduleFindById, FindByIdOpts } from 'app/vendor/workSchedule/workScheduleFindById';
import { FieldConfig } from '../definitions';

export default {
  type: WorkScheduleTC,
  args: {
    id: WorkScheduleID.NonNull,
  },
  resolve: (_, { id }, context, info) => {
    return workScheduleFindById({ id, info }, context);
  },
} as FieldConfig<FindByIdOpts>;
