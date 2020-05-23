import { WorkflowID } from 'app/schema/types/Scalars';
import { schemaComposer } from 'graphql-compose';
import { CustomStatus } from '../types/outputs/CustomStatus';

export const WorkflowTC = schemaComposer.createObjectTC({
  name: 'Workflow',
  fields: {
    id: WorkflowID.NonNull,
    name: {
      type: 'String!',
      description: 'Name (128 symbols max)',
    },
    standard: 'Boolean!',
    hidden: 'Boolean!',
    customStatuses: {
      type: CustomStatus.NonNull.List,
      description: 'Custom statuses',
    },
  },
});
