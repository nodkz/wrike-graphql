import { ObjectTypeComposerFieldConfigDefinition } from 'graphql-compose';
import { timelogFindMany } from 'app/vendor/timelog/timelogFindMany';
import { TimelogTC } from 'app/schema/entities/TimelogTC';
import { DateTimeRangeEqualInput } from 'app/schema/types/inputs/DateTimeRangeEqualInput';
import { TimelogCategoryID } from 'app/schema/types/Scalars';

const TimelogFilterByRelation = TimelogTC.schemaComposer.createInputTC({
  name: 'TimelogFilterByRelation',
  fields: {
    createdDate: {
      type: DateTimeRangeEqualInput,
      description: 'Created date filter, exact match or range',
    },
    updatedDate: {
      type: DateTimeRangeEqualInput,
      description: 'Last updated date filter, exact match or range',
    },
    trackedDate: {
      type: DateTimeRangeEqualInput,
      description: 'Tracked date filter, exact match or range',
    },
    me: {
      type: 'Boolean',
      description: 'If present - only timelogs created by current user are returned',
    },
    descendants: {
      type: 'Boolean',
      defaultValue: true,
      description: 'Adds all descendant tasks to search scope',
    },
    subTasks: {
      type: 'Boolean',
      defaultValue: true,
      description: 'Adds subtasks to search scope',
    },
    timelogCategories: {
      type: TimelogCategoryID,
      description: 'Get timelog records for specified categories',
    },
  },
});

export function getRelationTimelogsByContactId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => TimelogTC.NonNull.List,
    args: {
      filter: TimelogFilterByRelation,
      plainText: {
        type: 'Boolean',
        description: 'Get comment text as plain text, HTML otherwise',
      },
    },
    resolve: (source, args, context) => {
      return timelogFindMany(
        {
          filter: {
            ...args.filter,
            contactId: source[sourceFieldName],
          },
          plainText: args.plainText,
        },
        context
      );
    },
    projection: { [sourceFieldName]: 1 },
    extensions: {
      complexity: ({ childComplexity }) => childComplexity * 10,
    },
  };
}

export function getRelationTimelogsByFolderId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => TimelogTC.NonNull.List,
    args: {
      filter: TimelogFilterByRelation,
      plainText: {
        type: 'Boolean',
        description: 'Get comment text as plain text, HTML otherwise',
      },
    },
    resolve: (source, args, context) => {
      return timelogFindMany(
        {
          filter: {
            ...args.filter,
            folderId: source[sourceFieldName],
          },
          plainText: args.plainText,
        },
        context
      );
    },
    projection: { [sourceFieldName]: 1 },
    extensions: {
      complexity: ({ childComplexity }) => childComplexity * 10,
    },
  };
}

export function getRelationTimelogsByTaskId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => TimelogTC.NonNull.List,
    args: {
      filter: TimelogFilterByRelation,
      plainText: {
        type: 'Boolean',
        description: 'Get comment text as plain text, HTML otherwise',
      },
    },
    resolve: (source, args, context) => {
      return timelogFindMany(
        {
          filter: {
            ...args.filter,
            taskId: source[sourceFieldName],
          },
          plainText: args.plainText,
        },
        context
      );
    },
    projection: { [sourceFieldName]: 1 },
    extensions: {
      complexity: ({ childComplexity }) => childComplexity * 10,
    },
  };
}

export function getRelationTimelogsByTimelogCategoryId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => TimelogTC.NonNull.List,
    args: {
      filter: TimelogFilterByRelation,
      plainText: {
        type: 'Boolean',
        description: 'Get comment text as plain text, HTML otherwise',
      },
    },
    resolve: (source, args, context) => {
      return timelogFindMany(
        {
          filter: {
            ...args.filter,
            timelogCategoryId: source[sourceFieldName],
          },
          plainText: args.plainText,
        },
        context
      );
    },
    projection: { [sourceFieldName]: 1 },
    extensions: {
      complexity: ({ childComplexity }) => childComplexity * 10,
    },
  };
}
