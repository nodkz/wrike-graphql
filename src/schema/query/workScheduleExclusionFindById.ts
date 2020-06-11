import { FieldConfig } from 'app/schema/definitions';
import { WorkScheduleExclusionID } from '../types/Scalars';
import { WorkScheduleExclusionTC } from '../entities/WorkScheduleExclusionTC';
import {
  workScheduleExclusionFindById,
  FindByIdOpts,
} from 'app/vendor/workScheduleExclusion/workScheduleExclusionFindById';

export default {
  type: WorkScheduleExclusionTC,
  args: {
    id: WorkScheduleExclusionID.NonNull,
  },
  resolve: (_, args, context) => {
    return workScheduleExclusionFindById(args, context);
  },
} as FieldConfig<FindByIdOpts>;
