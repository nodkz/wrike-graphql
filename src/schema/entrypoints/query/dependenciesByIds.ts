import { FieldConfig } from 'app/schema/definitions';
import { DependencyID } from 'app/schema/types/Scalars';
import { DependencyTC } from 'app/schema/entities/DependencyTC';
import { dependencyFindByIds, FindByIdsArgs } from 'app/vendor/dependency/dependencyFindByIds';

export default {
  type: DependencyTC.NonNull.List,
  args: {
    ids: DependencyID.NonNull.List.NonNull,
  },
  resolve: (_, args, context) => {
    return dependencyFindByIds(args, context);
  },
  extensions: {
    complexity: ({ args, childComplexity }) => childComplexity * (args.ids.length || 100),
  },
} as FieldConfig<FindByIdsArgs>;
