import { FieldConfig } from 'app/schema/definitions';
import { DateYMD, UserScheduleExclusionID } from 'app/schema/types/Scalars';
import { UserScheduleExclusionTC } from '../entities/UserScheduleExclusionTC';
import { UserScheduleExclusionEnum } from '../types/Enums';
import {
  userScheduleExclusionUpdate,
  UpdateArgs,
} from 'app/vendor/userScheduleExclusion/userScheduleExclusionUpdate';

const UserScheduleExclusionUpdateInput = UserScheduleExclusionTC.schemaComposer.createInputTC({
  name: 'UserScheduleExclusionUpdateInput',
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
      type: UserScheduleExclusionEnum.NonNull.List.NonNull,
      description: 'Type of exclusion',
    },
  },
});

export default {
  type: UserScheduleExclusionTC,
  args: {
    id: UserScheduleExclusionID.NonNull,
    exclusion: UserScheduleExclusionUpdateInput.NonNull,
  },
  resolve: (_, args) => {
    return userScheduleExclusionUpdate(args);
  },
} as FieldConfig<UpdateArgs>;
