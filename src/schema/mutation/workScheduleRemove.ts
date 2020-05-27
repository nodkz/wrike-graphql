import { FieldConfig } from 'app/schema/definitions';
import { WorkScheduleID } from 'app/schema/types/Scalars';
import { WorkScheduleTC } from '../entities/WorkScheduleTC';
import { workScheduleRemove, RemoveArgs } from 'app/vendor/workSchedule/workScheduleRemove';

export default {
  type: WorkScheduleTC,
  args: {
    id: WorkScheduleID.NonNull,
  },
  resolve: (_, args) => {
    return workScheduleRemove(args);
  },
} as FieldConfig<RemoveArgs>;
