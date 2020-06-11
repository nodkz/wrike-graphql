import { FieldConfig } from 'app/schema/definitions';
import { WorkScheduleExclusionID, DateYMD } from 'app/schema/types/Scalars';
import {
  workScheduleExclusionUpdate,
  UpdateArgs,
} from 'app/vendor/workScheduleExclusion/workScheduleExclusionUpdate';
import { WorkScheduleExclusionTC } from '../entities/WorkScheduleExclusionTC';
import { WorkScheduleExclusionEnum } from '../types/Enums';

const WorkScheduleExclusionUpdateInput = WorkScheduleExclusionTC.schemaComposer.createInputTC({
  name: 'WorkScheduleExclusionUpdateInput',
  fields: {
    fromDate: {
      type: DateYMD,
      description: 'Exception from date. Format: yyyy-MM-dd',
    },
    toDate: {
      type: DateYMD,
      description: 'Exception to date. Format: yyyy-MM-dd',
    },
    exclusionType: {
      type: WorkScheduleExclusionEnum.NonNull.List,
      description: 'Type of exclusion',
    },
  },
});

export default {
  type: WorkScheduleExclusionTC,
  args: {
    id: WorkScheduleExclusionID.NonNull,
    exclusion: WorkScheduleExclusionUpdateInput.NonNull,
  },
  resolve: (_, args, context) => {
    return workScheduleExclusionUpdate(args, context);
  },
} as FieldConfig<UpdateArgs>;
