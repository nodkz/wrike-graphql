import { FieldConfig } from 'app/schema/definitions';
import { TaskID } from 'app/schema/types/Scalars';
import { ApprovalTC } from 'app/schema/entities/ApprovalTC';
import { approvalForTask, FindManyOpts } from 'app/vendor/approval/approvalForTask';

export default {
  type: ApprovalTC.NonNull.List,
  description: 'Reads all approvals on task.',
  args: {
    taskId: TaskID.NonNull,
  },
  resolve: (_, args, context) => {
    return approvalForTask(args, context);
  },
  extensions: {
    complexity: ({ childComplexity }) => childComplexity * 10,
  },
} as FieldConfig<FindManyOpts>;
