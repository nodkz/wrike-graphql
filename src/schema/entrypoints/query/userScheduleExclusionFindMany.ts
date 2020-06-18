import { FieldConfig } from 'app/schema/definitions';
import {
  userScheduleExclusionFindMany,
  FindManyOpts,
} from 'app/vendor/userScheduleExclusion/userScheduleExclusionFindMany';
import { UserScheduleExclusionTC } from 'app/schema/entities/UserScheduleExclusionTC';
import { ContactID } from 'app/schema/types/Scalars';
import { DateRangeEqualInput } from 'app/schema/types/inputs/DateRangeEqualInput';

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
  resolve: (_, args, context) => {
    return userScheduleExclusionFindMany(args, context);
  },
  extensions: {
    complexity: ({ childComplexity }) => childComplexity * 10,
  },
} as FieldConfig<FindManyOpts>;
