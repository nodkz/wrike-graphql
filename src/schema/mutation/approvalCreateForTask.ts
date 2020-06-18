import { FieldConfig } from 'app/schema/definitions';
import { TaskID } from 'app/schema/types/Scalars';
import { ApprovalTC } from 'app/schema/entities/ApprovalTC';
import { ApprovalCreateInput } from 'app/schema/types/inputs/ApprovalCreateInput';
import { approvalCreateForTask, CreateArgs } from 'app/vendor/approval/approvalCreateForTask';

export default {
  type: ApprovalTC,
  args: {
    taskId: TaskID.NonNull,
    approval: ApprovalCreateInput.NonNull,
  },
  resolve: (_, args, context) => {
    return approvalCreateForTask(args, context);
  },
} as FieldConfig<CreateArgs>;
