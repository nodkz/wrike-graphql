import { FieldConfig } from 'app/schema/definitions';
import { ApprovalID, AttachmentID } from 'app/schema/types/Scalars';
import { ApprovalTC } from 'app/schema/entities/ApprovalTC';
import { approvalUpdate } from 'app/vendor/approval/approvalUpdate';

export default {
  type: ApprovalTC,
  args: {
    id: ApprovalID.NonNull,
    attachments: AttachmentID.NonNull.List.NonNull,
  },
  resolve: (_, args, context) => {
    return approvalUpdate(
      {
        id: args.id,
        approval: { removeAttachments: args.attachments },
      },
      context
    );
  },
} as FieldConfig;
