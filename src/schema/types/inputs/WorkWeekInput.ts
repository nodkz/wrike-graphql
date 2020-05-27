import { schemaComposer } from 'graphql-compose';
import { WeekDayEnum } from '../Enums';

export const WorkWeekInput = schemaComposer.createInputTC({
  name: 'WorkWeekInput',
  fields: {
    dayOfWeek: {
      type: WeekDayEnum.NonNull,
      description: 'Day of week',
    },
    isWorkDay: {
      type: 'Boolean!',
      description: 'Is it working day',
    },
  },
});
