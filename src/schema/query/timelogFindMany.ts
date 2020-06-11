import { FieldConfig } from 'app/schema/definitions';
import { DateTimeRangeInput } from '../types/inputs/DateTimeRangeInput';
import { TaskID, FolderID, TimelogCategoryID, ContactID } from '../types/Scalars';
import { timelogFindMany, FindManyOpts } from 'app/vendor/timelog/timelogFindMany';
import { TimelogTC } from '../entities/TimelogTC';

const TimelogFindManyFilter = TimelogTC.schemaComposer.createInputTC({
  name: 'TimelogFindManyFilter',
  fields: {
    folderId: {
      type: FolderID,
      description: 'Get all timelog records for a folder.',
    },
    taskId: {
      type: TaskID,
      description: 'Get all timelog records for a task.',
    },
    contactId: {
      type: ContactID,
      description: 'Get all timelog records that were created by the user.',
    },
    timelogCategoryId: {
      type: TimelogCategoryID,
      description: 'Get all timelog records with specific timelog category.',
    },
    createdDate: {
      type: DateTimeRangeInput,
      description: 'Created date filter, exact match or range',
    },
    updatedDate: {
      type: DateTimeRangeInput,
      description: 'Last updated date filter, exact match or range',
    },
    trackedDate: {
      type: DateTimeRangeInput,
      description: 'Tracked date filter, exact match or range',
    },
    me: {
      type: 'Boolean',
      description: 'If present - only timelogs created by current user are returned',
    },
    descendants: {
      type: 'Boolean!',
      defaultValue: true,
      description: 'Adds all descendant tasks to search scope',
    },
    subTasks: {
      type: 'Boolean!',
      defaultValue: true,
      description: 'Adds subtasks to search scope',
    },
    timelogCategories: {
      type: TimelogCategoryID.NonNull.List,
      description: 'Get timelog records for specified categories',
    },
  },
});

export default {
  type: TimelogTC.NonNull.List,
  args: {
    filter: TimelogFindManyFilter,
    plainText: {
      type: 'Boolean!',
      defaultValue: false,
      description: 'Get comment text as plain text, HTML otherwise',
    },
  },
  resolve: (_, args, context) => {
    return timelogFindMany(
      {
        filter: args.filter,
        plainText: args.plainText,
      },
      context
    );
  },
  extensions: {
    complexity: ({ childComplexity }) => childComplexity * 10,
  },
} as FieldConfig<FindManyOpts>;
