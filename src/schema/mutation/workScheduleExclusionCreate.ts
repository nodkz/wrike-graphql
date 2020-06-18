import { FieldConfig } from 'app/schema/definitions';
import { DateYMD, WorkScheduleID } from 'app/schema/types/Scalars';
import { WorkScheduleExclusionTC } from 'app/schema/entities/WorkScheduleExclusionTC';
import {
  workScheduleExclusionCreate,
  CreateArgs,
} from 'app/vendor/workScheduleExclusion/workScheduleExclusionCreate';
import { WorkScheduleExclusionEnum } from 'app/schema/types/Enums';

const WorkScheduleExclusionCreateInput = WorkScheduleExclusionTC.schemaComposer.createInputTC({
  name: 'WorkScheduleExclusionCreateInput',
  fields: {
    fromDate: {
      type: DateYMD.NonNull,
      description: 'Exception from date. Format: yyyy-MM-dd',
    },
    toDate: {
      type: DateYMD.NonNull,
      description: 'Exception to date. Format: yyyy-MM-dd',
    },
    exclusionType: {
      type: WorkScheduleExclusionEnum.NonNull.List.NonNull,
      description: 'Type of exclusion',
    },
  },
});

export default {
  type: WorkScheduleExclusionTC,
  args: {
    workScheduleId: WorkScheduleID.NonNull,
    exclusion: WorkScheduleExclusionCreateInput.NonNull,
  },
  resolve: (_, args, context) => {
    return workScheduleExclusionCreate(args, context);
  },
} as FieldConfig<CreateArgs>;
