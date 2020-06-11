import { FieldConfig } from 'app/schema/definitions';
import { UserScheduleExclusionID } from 'app/schema/types/Scalars';
import {
  userScheduleExclusionRemove,
  RemoveArgs,
} from 'app/vendor/userScheduleExclusion/userScheduleExclusionRemove';
import { UserScheduleExclusionTC } from '../entities/UserScheduleExclusionTC';

export default {
  type: UserScheduleExclusionTC,
  args: {
    id: UserScheduleExclusionID.NonNull,
  },
  resolve: (_, args, context) => {
    return userScheduleExclusionRemove(args, context);
  },
} as FieldConfig<RemoveArgs>;
