import { FieldConfig } from 'app/schema/definitions';
import { ApprovalID } from 'app/schema/types/Scalars';
import { ApprovalTC } from 'app/schema/entities/ApprovalTC';
import { approvalCancel, RemoveArgs } from 'app/vendor/approval/approvalCancel';

export default {
  type: ApprovalTC,
  args: {
    id: ApprovalID.NonNull,
  },
  resolve: (_, args, context) => {
    return approvalCancel(args, context);
  },
} as FieldConfig<RemoveArgs>;
