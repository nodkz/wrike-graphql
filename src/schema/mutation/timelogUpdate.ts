import { FieldConfig } from 'app/schema/definitions';
import { TimelogID, DateYMD, TimelogCategoryID } from 'app/schema/types/Scalars';
import { TimelogTC } from '../entities/TimelogTC';
import { timelogUpdate, UpdateArgs } from 'app/vendor/timelog/timelogUpdate';

const TimelogUpdateInput = TimelogTC.schemaComposer.createInputTC({
  name: 'TimelogUpdateInput',
  fields: {
    comment: {
      type: 'String',
      description: 'Timelog comment',
    },
    hours: {
      type: 'Int',
      description: 'New timelog tracked hours',
    },
    trackedDate: {
      type: DateYMD,
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
    id: TimelogID.NonNull,
    timelog: TimelogUpdateInput.NonNull,
  },
  resolve: (_, args) => {
    return timelogUpdate(args);
  },
} as FieldConfig<UpdateArgs>;
