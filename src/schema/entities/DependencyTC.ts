import { DependencyID, TaskID } from 'app/schema/types/Scalars';
import { schemaComposer } from 'graphql-compose';
import { DependencyRelationEnum } from '../types/Enums';

export const DependencyTC = schemaComposer.createObjectTC({
  name: 'Dependency',
  fields: {
    id: DependencyID.NonNull,
    predecessorId: {
      type: TaskID.NonNull,
      description: 'Predecessor task ID',
    },
    successorId: {
      type: TaskID.NonNull,
      description: 'Successor task ID',
    },
    relationType: {
      type: DependencyRelationEnum.NonNull,
      description: 'Relation between Predecessor and Successor',
    },
  },
});
