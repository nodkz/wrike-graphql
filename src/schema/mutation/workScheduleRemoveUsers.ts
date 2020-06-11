import { FieldConfig } from 'app/schema/definitions';
import { WorkScheduleID, ContactID } from 'app/schema/types/Scalars';
import { WorkScheduleTC } from '../entities/WorkScheduleTC';
import { workScheduleUpdate } from 'app/vendor/workSchedule/workScheduleUpdate';

export default {
  type: WorkScheduleTC,
  args: {
    id: WorkScheduleID.NonNull,
    userIds: ContactID.NonNull.List.NonNull,
  },
  resolve: (_, { id, userIds }, context, info) => {
    return workScheduleUpdate(
      {
        id,
        info,
        workschedule: {
          removeUsers: userIds,
        },
      },
      context
    );
  },
} as FieldConfig;
