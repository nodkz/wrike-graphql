import { FieldConfig } from 'app/schema/definitions';
import { TaskID } from '../types/Scalars';
import { ApprovalTC } from '../entities/ApprovalTC';
import { approvalForTask, FindManyOpts } from 'app/vendor/approval/approvalForTask';

export default {
  type: ApprovalTC.NonNull.List,
  description: 'Reads all approvals on task.',
  args: {
    taskId: TaskID.NonNull,
  },
  resolve: (_, args) => {
    return approvalForTask(args);
  },
  extensions: {
    complexity: ({ childComplexity }) => childComplexity * 10,
  },
} as FieldConfig<FindManyOpts>;
