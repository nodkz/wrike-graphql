import { FieldConfig } from 'app/schema/definitions';
import { WorkScheduleExclusionID } from 'app/schema/types/Scalars';
import {
  workScheduleExclusionRemove,
  RemoveArgs,
} from 'app/vendor/workScheduleExclusion/workScheduleExclusionRemove';
import { WorkScheduleExclusionTC } from '../entities/WorkScheduleExclusionTC';

export default {
  type: WorkScheduleExclusionTC,
  args: {
    id: WorkScheduleExclusionID.NonNull,
  },
  resolve: (_, args) => {
    return workScheduleExclusionRemove(args);
  },
} as FieldConfig<RemoveArgs>;
