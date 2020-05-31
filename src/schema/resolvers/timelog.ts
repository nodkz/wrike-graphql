import { ObjectTypeComposerFieldConfigDefinition } from 'graphql-compose';
import { timelogFindMany } from 'app/vendor/timelog/timelogFindMany';
import { TimelogTC } from '../entities/TimelogTC';

export function getRelationTimelogsByContactId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => TimelogTC.NonNull.List,
    resolve: (source) => {
      return timelogFindMany({
        filter: {
          contactId: source[sourceFieldName],
        },
      });
    },
    projection: { [sourceFieldName]: 1 },
  };
}

export function getRelationTimelogsByFolderId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => TimelogTC.NonNull.List,
    resolve: (source) => {
      return timelogFindMany({
        filter: {
          folderId: source[sourceFieldName],
        },
      });
    },
    projection: { [sourceFieldName]: 1 },
  };
}

export function getRelationTimelogsByTaskId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => TimelogTC.NonNull.List,
    resolve: (source) => {
      return timelogFindMany({
        filter: {
          taskId: source[sourceFieldName],
        },
      });
    },
    projection: { [sourceFieldName]: 1 },
  };
}

export function getRelationTimelogsByTimelogCategoryId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => TimelogTC.NonNull.List,
    resolve: (source) => {
      return timelogFindMany({
        filter: {
          timelogCategoryId: source[sourceFieldName],
        },
      });
    },
    projection: { [sourceFieldName]: 1 },
  };
}
