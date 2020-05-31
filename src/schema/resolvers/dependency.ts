import { ObjectTypeComposerFieldConfigDefinition } from 'graphql-compose';
import { DependencyTC } from '../entities/DependencyTC';
import { dependencyForTask } from 'app/vendor/dependency/dependencyForTask';

export function getRelationDependenciesByTaskId(
  sourceFieldName: string
): ObjectTypeComposerFieldConfigDefinition<any, any> {
  return {
    type: () => DependencyTC.NonNull.List,
    resolve: (source) => {
      return dependencyForTask({
        taskId: source[sourceFieldName],
      });
    },
    projection: { [sourceFieldName]: 1 },
  };
}
