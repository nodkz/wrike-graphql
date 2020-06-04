import { FieldConfig } from 'app/schema/definitions';
import { WorkScheduleID } from '../types/Scalars';
import { DateRangeEqualInput } from '../types/inputs/DateRangeEqualInput';
import { WorkScheduleExclusionTC } from '../entities/WorkScheduleExclusionTC';
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
  resolve: (_, args) => {
    return workScheduleExclusionFindMany(args);
  },
  extensions: {
    complexity: ({ childComplexity }) => childComplexity * 10,
  },
} as FieldConfig<FindManyOpts>;
