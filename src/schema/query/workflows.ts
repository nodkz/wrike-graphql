import { WorkflowTC } from 'app/schema/entities/WorkflowTC';
import { FieldConfig } from 'app/schema/definitions';
import { workflowFindMany } from 'app/vendor/workflow/workflowFindMany';

export default {
  type: WorkflowTC.List.NonNull,
  resolve: () => {
    return workflowFindMany;
  },
} as FieldConfig;
