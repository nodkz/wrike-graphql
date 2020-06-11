import { TaskTC } from 'app/schema/entities/TaskTC';
import { FieldConfig } from 'app/schema/definitions';
import { taskFindMany } from 'app/vendor/task/taskFindMany';
import { DateTimeRangeEqualInput } from '../types/inputs/DateTimeRangeEqualInput';
import { DateRangeEqualInput } from '../types/inputs/DateRangeEqualInput';
import { DateTimeRangeInput } from '../types/inputs/DateTimeRangeInput';
import { ContactID, CustomStatusID } from '../types/Scalars';
import {
  TaskDatesTypeEnum,
  TaskStatusEnum,
  TaskImportanceEnum,
  TaskFindManySortEnum,
} from '../types/Enums';
import { KeyValueInput } from '../types/inputs/KeyValueInput';
import { CustomFieldFilterInput } from '../types/inputs/CustomFieldFilterInput';

export default {
  type: TaskTC.NonNull.List,
  args: {
    limit: {
      type: 'Int',
      description: 'Limit on number of returned tasks',
    },
    pageSize: {
      type: 'Int',
      description: 'Page size',
    },
    nextPageToken: {
      type: 'String',
      description: 'Next page token, overrides any other parameters in request',
    },
    filter: TaskTC.schemaComposer.createInputTC({
      name: 'TaskFindManyFilter',
      fields: {
        descendants: {
          type: 'Boolean',
          description: 'Adds all descendant folders to search scope',
        },
        title: {
          type: 'String',
          description: 'Title filter, exact match',
        },
        status: {
          type: TaskStatusEnum,
          description: 'Status filter, match with any of specified constants',
        },
        importance: {
          type: TaskImportanceEnum,
          description: 'Importance filter, exact match',
        },
        startDate: {
          type: DateTimeRangeEqualInput,
          description: 'Start date filter, date match or range',
        },
        dueDate: {
          type: DateTimeRangeEqualInput,
          description: 'Due date filter, date match or range',
        },
        scheduledDate: {
          type: DateRangeEqualInput,
          description:
            'Scheduled date filter. Both dates should be set in ranged version. Returns all tasks that have schedule intersecting with specified interval, date match or range',
        },
        createdDate: {
          type: DateTimeRangeInput,
          description: 'Created date filter, range',
        },
        updatedDate: {
          type: DateTimeRangeInput,
          description: 'Created date filter, range',
        },
        completedDate: {
          type: DateTimeRangeInput,
          description: 'Completed date filter, range',
        },
        authors: {
          type: ContactID.NonNull.List,
          description: 'Authors filter, match of any',
        },
        responsibles: {
          type: ContactID.NonNull.List,
          description: 'Responsibles filter, match of any',
        },
        type: {
          type: TaskDatesTypeEnum,
          description: 'Task type',
        },
        subTasks: {
          type: 'Boolean',
          description: 'Adds subtasks to search scope',
        },
        customStatuses: {
          type: CustomStatusID,
          description: 'Custom statuses filter',
        },
        metadata: {
          type: KeyValueInput,
          description: 'Folders metadata filter',
        },
        customField: {
          type: CustomFieldFilterInput,
          description: 'Custom field filter',
        },
        folderId: 'String',
        spaceId: 'String',
      },
    }),
    sort: TaskFindManySortEnum,
  },
  resolve: (_, args, context, info) => {
    return taskFindMany(
      {
        info,
        filter: args.filter,
        limit: args.limit,
        pageSize: args.pageSize,
        nextPageToken: args.nextPageToken,
        ...args.sort,
      },
      context
    );
  },
  extensions: {
    complexity: ({ args, childComplexity }) =>
      childComplexity * (args.limit || args.pageSize || 100),
  },
} as FieldConfig;
