import { ContactID, WorkScheduleID } from 'app/schema/types/Scalars';
import { schemaComposer } from 'graphql-compose';
import { WorkScheduleTypeEnum } from '../types/Enums';

export const WorkScheduleTC = schemaComposer.createObjectTC({
  name: 'WorkSchedule',
  fields: {
    id: WorkScheduleID.NonNull,
    scheduleType: {
      type: WorkScheduleTypeEnum.NonNull,
      description: '',
    },
    title: {
      type: 'String',
      description: 'Title',
    },
    workweek: {
      type: 'JSON',
      description: 'Work week',
    },
    userIds: {
      type: ContactID.NonNull.List,
      description: 'User ids assigned to schedule',
    },
  },
});

if (!process.env.DISABLE_RELATIONS) {
  WorkScheduleTC.addFields({});
}
