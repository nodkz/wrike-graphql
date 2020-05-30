import { resolveManyViaDL, resolveOneViaDL } from 'app/schema/dataLoaders';
import { ObjectTypeComposerFieldConfigDefinition } from 'graphql-compose';
import { taskFindByIds } from 'app/vendor/task/taskFindByIds';
import { TaskTC } from '../entities/TaskTC';
import { taskFindMany } from 'app/vendor/task/taskFindMany';

export function getRelationTaskIds(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => TaskTC.NonNull.List,
    resolve: process.env.DISABLE_DATALOADERS
      ? (source, _, __, info) => taskFindByIds({ ids: source[sourceFieldName], info })
      : resolveManyViaDL('TaskID', (s) => s[sourceFieldName]),
    projection: { [sourceFieldName]: 1 },
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

export function getRelationTasksBySpaceId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => TaskTC.NonNull.List,
    resolve: (source, _, __, info) => {
      return taskFindMany({ filter: { spaceId: source[sourceFieldName] }, info });
    },
    projection: { [sourceFieldName]: 1 },
  };
}
