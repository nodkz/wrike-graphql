import { FieldConfig } from 'app/schema/definitions';
import {
  userScheduleExclusionFindMany,
  FindManyOpts,
} from 'app/vendor/userScheduleExclusion/userScheduleExclusionFindMany';
import { UserScheduleExclusionTC } from '../entities/UserScheduleExclusionTC';
import { ContactID } from '../types/Scalars';
import { DateRangeEqualInput } from '../types/inputs/DateRangeEqualInput';

const UserScheduleExclusionFilter = UserScheduleExclusionTC.schemaComposer.createInputTC({
  name: 'UserScheduleExclusionFilter',
  fields: {
    dateRange: DateRangeEqualInput,
    userIds: ContactID.NonNull.List,
  },
});

export default {
  type: UserScheduleExclusionTC.NonNull.List,
  args: {
    filter: UserScheduleExclusionFilter,
  },
  resolve: (_, args) => {
    return userScheduleExclusionFindMany(args);
  },
  extensions: {
    complexity: ({ childComplexity }) => childComplexity * 10,
  },
} as FieldConfig<FindManyOpts>;
