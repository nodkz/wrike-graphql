import { FieldConfig } from 'app/schema/definitions';
import { TaskID } from 'app/schema/types/Scalars';
import { dependencyCreate, CreateArgs } from 'app/vendor/dependency/dependencyCreate';
import { DependencyTC } from '../entities/DependencyTC';
import { DependencyRelationEnum } from '../types/Enums';

const DependencyCreateInput = DependencyTC.schemaComposer.createInputTC({
  name: 'DependencyCreateInput',
  fields: {
    predecessorId: {
      type: TaskID,
      description:
        'Add predecessor task, only one of predecessorId/successorId fields can be specified',
    },
    successorId: {
      type: TaskID,
      description:
        'Add successor task, only one of predecessorId/successorId fields can be specified',
    },
    relationType: DependencyRelationEnum.NonNull,
  },
});

export default {
  type: DependencyTC,
  args: {
    taskId: TaskID.NonNull,
    dependency: DependencyCreateInput.NonNull,
  },
  resolve: (_, args, context) => {
    return dependencyCreate(args, context);
  },
} as FieldConfig<CreateArgs>;
