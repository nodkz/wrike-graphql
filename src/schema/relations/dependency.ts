import { ObjectTypeComposerFieldConfigDefinition } from 'graphql-compose';
import { DependencyTC } from 'app/schema/entities/DependencyTC';
import { dependencyForTask } from 'app/vendor/dependency/dependencyForTask';
import { resolveManyViaDL } from 'app/schema/dataLoaders';
import { dependencyFindByIds } from 'app/vendor/dependency/dependencyFindByIds';

export function getRelationDependenciesByTaskId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => DependencyTC.NonNull.List,
    resolve: (source, _, context) => {
      return dependencyForTask(
        {
          taskId: source[sourceFieldName],
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

export function getRelationDependencyIds(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => DependencyTC.NonNull.List,
    resolve: process.env.DISABLE_DATALOADERS
      ? (source, _, context) => dependencyFindByIds({ ids: source[sourceFieldName] }, context)
      : resolveManyViaDL('DependencyID', (s) => s[sourceFieldName]),
    projection: { [sourceFieldName]: 1 },
    extensions: {
      complexity: ({ childComplexity }) => childComplexity * 10,
    },
  };
}
