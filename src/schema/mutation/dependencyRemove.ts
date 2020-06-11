import { FieldConfig } from 'app/schema/definitions';
import { DependencyID } from 'app/schema/types/Scalars';
import { dependencyRemove, RemoveArgs } from 'app/vendor/dependency/dependencyRemove';
import { DependencyTC } from '../entities/DependencyTC';

export default {
  type: DependencyTC,
  args: {
    id: DependencyID.NonNull,
  },
  resolve: (_, args, context) => {
    return dependencyRemove(args, context);
  },
} as FieldConfig<RemoveArgs>;
