import { WorkflowTC } from 'app/schema/entities/WorkflowTC';
import { FieldConfig } from 'app/schema/definitions';
import { workflowFindMany } from 'app/vendor/workflow/workflowFindMany';

export default {
  type: WorkflowTC.NonNull.List,
  resolve: (_, __, context) => {
    return workflowFindMany({}, context);
  },
  extensions: {
    complexity: ({ childComplexity }) => childComplexity * 10,
  },
} as FieldConfig;
