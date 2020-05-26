import { FieldConfig } from 'app/schema/definitions';
import { ApprovalID } from 'app/schema/types/Scalars';
import { ApprovalTC } from '../entities/ApprovalTC';
import { approvalCancel, RemoveArgs } from 'app/vendor/approval/approvalCancel';

export default {
  type: ApprovalTC,
  args: {
    id: ApprovalID.NonNull,
  },
  resolve: (_, args) => {
    return approvalCancel(args);
  },
} as FieldConfig<RemoveArgs>;
