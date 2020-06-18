import { FieldConfig } from 'app/schema/definitions';
import { DateYMD, ContactID } from 'app/schema/types/Scalars';
import { UserScheduleExclusionTC } from 'app/schema/entities/UserScheduleExclusionTC';
import { UserScheduleExclusionEnum } from 'app/schema/types/Enums';
import {
  userScheduleExclusionCreate,
  CreateArgs,
} from 'app/vendor/userScheduleExclusion/userScheduleExclusionCreate';

const UserScheduleExclusionCreateInput = UserScheduleExclusionTC.schemaComposer.createInputTC({
  name: 'UserScheduleExclusionCreateInput',
  fields: {
    userId: {
      type: ContactID.NonNull,
      description: 'User id to add new exception',
    },
    fromDate: {
      type: DateYMD.NonNull,
      description: 'Exception from date. Format: yyyy-MM-dd',
    },
    toDate: {
      type: DateYMD.NonNull,
      description: 'Exception to date. Format: yyyy-MM-dd',
    },
    exclusionType: {
      type: UserScheduleExclusionEnum.NonNull.List.NonNull,
      description: 'Type of exclusion',
    },
  },
});

export default {
  type: UserScheduleExclusionTC,
  args: {
    exclusion: UserScheduleExclusionCreateInput.NonNull,
  },
  resolve: (_, args, context) => {
    return userScheduleExclusionCreate(args, context);
  },
} as FieldConfig<CreateArgs>;
