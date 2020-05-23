import { TaskTC } from 'app/schema/entities/TaskTC';
import { FieldConfig } from 'app/schema/definitions';
import { taskFindMany } from 'app/vendor/task/taskFindMany';
import { DateTimeRangeEqualInput } from '../types/inputs/DateTimeRangeEqualInput';
import { DateRangeEqualInput } from '../types/inputs/DateRangeEqualInput';
import { DateTimeRangeInput } from '../types/inputs/DateTimeRangeInput';
import { ContactID } from '../types/Scalars';
import { TaskDatesTypeEnum, TaskStatusEnum, TaskImportanceEnum } from '../types/Enums';

export default {
  type: [TaskTC],
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
        folderId: 'String',
        spaceId: 'String',
        title: 'String',
        status: TaskStatusEnum,
        importance: TaskImportanceEnum,
        startDate: DateTimeRangeEqualInput,
        dueDate: DateTimeRangeEqualInput,
        scheduledDate: DateRangeEqualInput,
        createdDate: DateTimeRangeInput,
        updatedDate: DateTimeRangeInput,
        completedDate: DateTimeRangeInput,
        authors: ContactID.List,
        responsibles: ContactID.List,
        type: TaskDatesTypeEnum,
        metadata: 'JSON',
      },
    }),
    sort: TaskTC.schemaComposer.createEnumTC({
      name: 'TaskFindManySort',
      values: {
        CREATED_DATE_ASC: {
          value: { sortField: 'CreatedDate', sortOrder: 'Asc' },
          description: 'Sort by created date',
        },
        CREATED_DATE_DESC: {
          value: { sortField: 'CreatedDate', sortOrder: 'Desc' },
          description: 'Sort by created date',
        },
        UPDATED_DATE_ASC: {
          value: { sortField: 'UpdatedDate', sortOrder: 'Asc' },
          description: 'Sort by updated date',
        },
        UPDATED_DATE_DESC: {
          value: { sortField: 'UpdatedDate', sortOrder: 'Desc' },
          description: 'Sort by updated date',
        },
        COMPLETED_DATE_ASC: {
          value: { sortField: 'CompletedDate', sortOrder: 'Asc' },
          description: 'Sort by completed date',
        },
        COMPLETED_DATE_DESC: {
          value: { sortField: 'CompletedDate', sortOrder: 'Desc' },
          description: 'Sort by completed date',
        },
        DUE_DATE_ASC: {
          value: { sortField: 'DueDate', sortOrder: 'Asc' },
          description: 'Sort by due date',
        },
        DUE_DATE_DESC: {
          value: { sortField: 'DueDate', sortOrder: 'Desc' },
          description: 'Sort by due date',
        },
        STATUS_ASC: {
          value: { sortField: 'Status', sortOrder: 'Asc' },
          description: 'Sort by status ASC',
        },
        STATUS_DESC: {
          value: { sortField: 'Status', sortOrder: 'Desc' },
          description: 'Sort by status',
        },
        IMPORTANCE_ASC: {
          value: { sortField: 'Importance', sortOrder: 'Asc' },
          description: 'Sort by importance',
        },
        IMPORTANCE_DESC: {
          value: { sortField: 'Importance', sortOrder: 'Desc' },
          description: 'Sort by importance',
        },
        TITLE_ASC: {
          value: { sortField: 'Title', sortOrder: 'Asc' },
          description: 'Lexicographic sorting by title',
        },
        TITLE_DESC: {
          value: { sortField: 'Title', sortOrder: 'Desc' },
          description: 'Lexicographic sorting by title',
        },
        LAST_ACCESS_DATE_ASC: {
          value: { sortField: 'LastAccessDate', sortOrder: 'Asc' },
          description: 'Sort by last access date',
        },
        LAST_ACCESS_DATE_DESC: {
          value: { sortField: 'LastAccessDate', sortOrder: 'Desc' },
          description: 'Sort by last access date',
        },
      },
    }),
    subTasks: {
      type: 'Boolean',
      description: 'Adds subtasks to search scope',
    },
    descendants: {
      type: 'Boolean',
      description: 'Adds all descendant folders to search scope',
    },
  },
  resolve: (_, args, context, info) => {
    return taskFindMany({
      info,
      filter: args.filter,
      limit: args.limit,
      pageSize: args.pageSize,
      nextPageToken: args.nextPageToken,
      subTasks: args.subTasks,
      descendants: args.descendants,
      ...args.sort,
    });
  },
} as FieldConfig;
