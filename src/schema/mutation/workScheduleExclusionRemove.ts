import { FieldConfig } from 'app/schema/definitions';
import { WorkScheduleExclusionID } from 'app/schema/types/Scalars';
import {
  workScheduleExclusionRemove,
  RemoveArgs,
} from 'app/vendor/workScheduleExclusion/workScheduleExclusionRemove';
import { WorkScheduleExclusionTC } from 'app/schema/entities/WorkScheduleExclusionTC';

export default {
  type: WorkScheduleExclusionTC,
  args: {
    id: WorkScheduleExclusionID.NonNull,
  },
  resolve: (_, args, context) => {
    return workScheduleExclusionRemove(args, context);
  },
} as FieldConfig<RemoveArgs>;
