import { FieldConfig } from 'app/schema/definitions';
import { DateYMD, TimelogCategoryID, TaskID } from 'app/schema/types/Scalars';
import { TimelogTC } from '../entities/TimelogTC';
import { timelogCreate, CreateArgs } from 'app/vendor/timelog/timelogCreate';

const TimelogCreateInput = TimelogTC.schemaComposer.createInputTC({
  name: 'TimelogCreateInput',
  fields: {
    comment: {
      type: 'String!',
      description: 'Timelog comment',
    },
    hours: {
      type: 'Int!',
      description: 'New timelog tracked hours',
    },
    trackedDate: {
      type: DateYMD.NonNull,
      description: 'New timelog date. Format: yyyy-MM-dd',
    },
    plainText: {
      type: 'Boolean',
      defaultValue: false,
      description: 'Get comment text as plain text, HTML otherwise',
    },
    categoryId: {
      type: TimelogCategoryID,
      description: 'Timelog category',
    },
  },
});

export default {
  type: TimelogTC,
  args: {
    taskId: TaskID.NonNull,
    timelog: TimelogCreateInput.NonNull,
  },
  resolve: (_, args) => {
    return timelogCreate(args);
  },
} as FieldConfig<CreateArgs>;
