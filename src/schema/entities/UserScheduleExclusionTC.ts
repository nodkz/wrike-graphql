import { DateYMD, UserScheduleExclusionID, ContactID } from 'app/schema/types/Scalars';
import { schemaComposer } from 'graphql-compose';
import { UserScheduleExclusionEnum } from '../types/Enums';

export const UserScheduleExclusionTC = schemaComposer.createObjectTC({
  name: 'UserScheduleExclusion',
  fields: {
    id: UserScheduleExclusionID.NonNull,
    userId: {
      type: ContactID.NonNull,
      description: 'Contact ID',
    },
    fromDate: {
      type: DateYMD.NonNull,
      description: 'Format: yyyy-MM-dd',
    },
    toDate: {
      type: DateYMD.NonNull,
      description: 'Format: yyyy-MM-dd',
    },
    isWorkDays: {
      type: 'Boolean!',
      description: 'True if this exception is for working days',
    },
    exclusionType: {
      type: UserScheduleExclusionEnum.NonNull,
      description: '',
    },
  },
});

if (!process.env.DISABLE_RELATIONS) {
  UserScheduleExclusionTC.addFields({});
}
