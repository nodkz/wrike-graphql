import { resolveManyViaDL, resolveOneViaDL } from 'app/schema/dataLoaders';
import { ObjectTypeComposerFieldConfigDefinition } from 'graphql-compose';
import { taskFindByIds } from 'app/vendor/task/taskFindByIds';
import { TaskTC } from '../entities/TaskTC';
import { taskFindMany } from 'app/vendor/task/taskFindMany';
import {
  TaskStatusEnum,
  TaskImportanceEnum,
  TaskDatesTypeEnum,
  TaskFindManySortEnum,
} from '../types/Enums';
import { DateTimeRangeEqualInput } from '../types/inputs/DateTimeRangeEqualInput';
import { DateRangeEqualInput } from '../types/inputs/DateRangeEqualInput';
import { DateTimeRangeInput } from '../types/inputs/DateTimeRangeInput';
import { ContactID, CustomStatusID } from '../types/Scalars';
import { KeyValueInput } from '../types/inputs/KeyValueInput';
import { CustomFieldFilterInput } from '../types/inputs/CustomFieldFilterInput';

export function getRelationTaskIds(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => TaskTC.NonNull.List,
    resolve: process.env.DISABLE_DATALOADERS
      ? (source, _, __, info) => taskFindByIds({ ids: source[sourceFieldName], info })
      : resolveManyViaDL('TaskID', (s) => s[sourceFieldName]),
    projection: { [sourceFieldName]: 1 },
    extensions: {
      complexity: ({ childComplexity }) => childComplexity * 10,
    },
  };
}

export function getRelationTaskId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => TaskTC,
    resolve: process.env.DISABLE_DATALOADERS
      ? async (source, _, __, info) => {
          const records = await taskFindByIds({ ids: source[sourceFieldName], info });
          return records?.[0];
        }
      : resolveOneViaDL('TaskID', (s) => s[sourceFieldName]),
    projection: { [sourceFieldName]: 1 },
  };
}

const TaskFilterByRelation = TaskTC.schemaComposer.createInputTC({
  name: 'TaskFilterByRelation',
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
    permalink: {
      type: 'String',
      description: 'Task permalink, exact match',
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
  },
});

export function getRelationTasksBySpaceId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => TaskTC.NonNull.List,
    args: {
      filter: TaskFilterByRelation,
      sort: TaskFindManySortEnum,
      limit: {
        type: 'Int',
        defaultValue: 10,
        description: 'Limit on number of returned approvals',
      },
      pageSize: {
        type: 'Int',
        description: 'Page size',
      },
      nextPageToken: {
        type: 'String',
        description: 'Next page token, overrides any other parameters in request',
      },
    },
    resolve: (source, args, __, info) => {
      return taskFindMany({
        info,
        filter: {
          ...args.filter,
          spaceId: source[sourceFieldName],
        },
        limit: args.limit,
        pageSize: args.pageSize,
        nextPageToken: args.nextPageToken,
        ...args.sort,
      });
    },
    projection: { [sourceFieldName]: 1 },
    extensions: {
      complexity: ({ args, childComplexity }) =>
        childComplexity * (args.limit || args.pageSize || 10),
    },
  };
}

export function getRelationTasksByFolderId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => TaskTC.NonNull.List,
    args: {
      filter: TaskFilterByRelation,
      sort: TaskFindManySortEnum,
      limit: {
        type: 'Int',
        defaultValue: 10,
        description: 'Limit on number of returned approvals',
      },
      pageSize: {
        type: 'Int',
        description: 'Page size',
      },
      nextPageToken: {
        type: 'String',
        description: 'Next page token, overrides any other parameters in request',
      },
    },
    resolve: (source, args, __, info) => {
      return taskFindMany({
        info,
        filter: {
          ...args.filter,
          folderId: source[sourceFieldName],
        },
        limit: args.limit,
        pageSize: args.pageSize,
        nextPageToken: args.nextPageToken,
        ...args.sort,
      });
    },
    projection: { [sourceFieldName]: 1 },
    extensions: {
      complexity: ({ args, childComplexity }) =>
        childComplexity * (args.limit || args.pageSize || 10),
    },
  };
}

export function getRelationTasksByAuthorId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => TaskTC.NonNull.List,
    args: {
      filter: TaskFilterByRelation,
      sort: TaskFindManySortEnum,
      limit: {
        type: 'Int',
        defaultValue: 10,
        description: 'Limit on number of returned approvals',
      },
      pageSize: {
        type: 'Int',
        description: 'Page size',
      },
      nextPageToken: {
        type: 'String',
        description: 'Next page token, overrides any other parameters in request',
      },
    },
    resolve: (source, args, __, info) => {
      return taskFindMany({
        info,
        filter: {
          ...args.filter,
          authors: [source[sourceFieldName]],
        },
        limit: args.limit,
        pageSize: args.pageSize,
        nextPageToken: args.nextPageToken,
        ...args.sort,
      });
    },
    projection: { [sourceFieldName]: 1 },
    extensions: {
      complexity: ({ args, childComplexity }) =>
        childComplexity * (args.limit || args.pageSize || 10),
    },
  };
}

export function getRelationTasksByResponsibleId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => TaskTC.NonNull.List,
    args: {
      filter: TaskFilterByRelation,
      sort: TaskFindManySortEnum,
      limit: {
        type: 'Int',
        defaultValue: 10,
        description: 'Limit on number of returned approvals',
      },
      pageSize: {
        type: 'Int',
        description: 'Page size',
      },
      nextPageToken: {
        type: 'String',
        description: 'Next page token, overrides any other parameters in request',
      },
    },
    resolve: (source, args, __, info) => {
      return taskFindMany({
        info,
        filter: {
          ...args.filter,
          responsibles: [source[sourceFieldName]],
        },
        limit: args.limit,
        pageSize: args.pageSize,
        nextPageToken: args.nextPageToken,
        ...args.sort,
      });
    },
    projection: { [sourceFieldName]: 1 },
    extensions: {
      complexity: ({ args, childComplexity }) =>
        childComplexity * (args.limit || args.pageSize || 100),
    },
  };
}
