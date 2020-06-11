import { FieldConfig } from 'app/schema/definitions';
import { WorkScheduleTC } from '../entities/WorkScheduleTC';
import { WorkWeekInput } from '../types/inputs/WorkWeekInput';
import { workScheduleCreate, CreateArgs } from 'app/vendor/workSchedule/workScheduleCreate';
import { ContactID } from '../types/Scalars';

const WorkScheduleUpdateInput = WorkScheduleTC.schemaComposer.createInputTC({
  name: 'WorkSchedulecreateInput',
  fields: {
    title: {
      type: 'String',
      description: 'Name of work schedule',
    },
    workweek: {
      type: WorkWeekInput.NonNull.List,
      description: 'Work week: working and non-working days',
    },
    addUsers: {
      type: ContactID.NonNull.List,
      description: 'User ids to assign to the schedule',
    },
  },
});

export default {
  type: WorkScheduleTC,
  args: {
    workschedule: WorkScheduleUpdateInput.NonNull,
  },
  resolve: (_, args, context, info) => {
    return workScheduleCreate({ ...args, info }, context);
  },
} as FieldConfig<CreateArgs>;
