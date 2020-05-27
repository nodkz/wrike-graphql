import { FieldConfig } from 'app/schema/definitions';
import { workScheduleFindMany, FindManyOpts } from 'app/vendor/workSchedule/workScheduleFindMany';
import { WorkScheduleTC } from '../entities/WorkScheduleTC';

export default {
  type: WorkScheduleTC.NonNull.List,
  resolve: (_, __, context, info) => {
    return workScheduleFindMany({ info });
  },
} as FieldConfig<FindManyOpts>;
