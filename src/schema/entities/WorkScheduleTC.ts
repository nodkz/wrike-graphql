import { ContactID, WorkScheduleID } from 'app/schema/types/Scalars';
import { schemaComposer } from 'graphql-compose';
import { WorkScheduleTypeEnum } from '../types/Enums';
import { getRelationContactIds } from '../resolvers/contact';
import { getRelationWorkScheduleExclusionByWorkScheduleId } from '../resolvers/workScheduleExclusion';

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
  WorkScheduleTC.addFields({
    users: getRelationContactIds('userIds'),
  });
}

if (!process.env.DISABLE_BACK_RELATIONS) {
  WorkScheduleTC.addFields({
    exclusions: getRelationWorkScheduleExclusionByWorkScheduleId('id'),
  });
}
