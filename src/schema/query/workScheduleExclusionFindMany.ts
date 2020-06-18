import { FieldConfig } from 'app/schema/definitions';
import { WorkScheduleID } from 'app/schema/types/Scalars';
import { DateRangeEqualInput } from 'app/schema/types/inputs/DateRangeEqualInput';
import { WorkScheduleExclusionTC } from 'app/schema/entities/WorkScheduleExclusionTC';
import {
  workScheduleExclusionFindMany,
  FindManyOpts,
} from 'app/vendor/workScheduleExclusion/workScheduleExclusionFindMany';

const WorkScheduleExclusionFilter = WorkScheduleExclusionTC.schemaComposer.createInputTC({
  name: 'WorkScheduleExclusionFilter',
  fields: {
    dateRange: DateRangeEqualInput,
  },
});

export default {
  type: WorkScheduleExclusionTC.NonNull.List,
  args: {
    filter: WorkScheduleExclusionFilter,
    workScheduleId: WorkScheduleID.NonNull,
  },
  resolve: (_, args, context) => {
    return workScheduleExclusionFindMany(args, context);
  },
  extensions: {
    complexity: ({ childComplexity }) => childComplexity * 10,
  },
} as FieldConfig<FindManyOpts>;
