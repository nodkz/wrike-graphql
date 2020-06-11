import { FieldConfig } from 'app/schema/definitions';
import { DependencyID } from 'app/schema/types/Scalars';
import { dependencyUpdate, UpdateArgs } from 'app/vendor/dependency/dependencyUpdate';
import { DependencyTC } from '../entities/DependencyTC';
import { DependencyRelationEnum } from '../types/Enums';

const DependencyUpdateInput = DependencyTC.schemaComposer.createInputTC({
  name: 'DependencyUpdateInput',
  fields: {
    relationType: DependencyRelationEnum.NonNull,
  },
});

export default {
  type: DependencyTC,
  args: {
    id: DependencyID.NonNull,
    dependency: DependencyUpdateInput.NonNull,
  },
  resolve: (_, args, context) => {
    return dependencyUpdate(args, context);
  },
} as FieldConfig<UpdateArgs>;
