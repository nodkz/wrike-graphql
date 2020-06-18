import { FieldConfig } from 'app/schema/definitions';
import { ApprovalID, ContactID } from 'app/schema/types/Scalars';
import { ApprovalTC } from 'app/schema/entities/ApprovalTC';
import { approvalUpdate } from 'app/vendor/approval/approvalUpdate';

export default {
  type: ApprovalTC,
  args: {
    id: ApprovalID.NonNull,
    approvers: ContactID.NonNull.List.NonNull,
  },
  resolve: (_, args, context) => {
    return approvalUpdate(
      {
        id: args.id,
        approval: { removeApprovers: args.approvers },
      },
      context
    );
  },
} as FieldConfig;
