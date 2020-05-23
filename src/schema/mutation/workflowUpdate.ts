import { FieldConfig } from 'app/schema/definitions';
import { WorkflowID } from 'app/schema/types/Scalars';
import { WorkflowTC } from '../entities/WorkflowTC';
import { workflowUpdate, UpdateArgs } from 'app/vendor/workflow/workflowUpdate';

export const WorkflowUpdateInput = WorkflowTC.schemaComposer.createInputTC({
  name: 'WorkflowUpdateInput',
  fields: {
    name: {
      type: 'String',
      description: 'Name of workflow (128 symbols max)',
    },
    hidden: 'Boolean',
    customStatus: 'JSON',
  },
});

export default {
  type: WorkflowTC,
  args: {
    id: WorkflowID.NonNull,
    workflow: WorkflowUpdateInput.NonNull,
  },
  resolve: (_, args) => {
    return workflowUpdate(args);
  },
} as FieldConfig<UpdateArgs>;
