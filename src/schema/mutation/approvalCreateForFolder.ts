import { FieldConfig } from 'app/schema/definitions';
import { FolderID } from 'app/schema/types/Scalars';
import { ApprovalTC } from 'app/schema/entities/ApprovalTC';
import { ApprovalCreateInput } from 'app/schema/types/inputs/ApprovalCreateInput';
import { approvalCreateForFolder, CreateArgs } from 'app/vendor/approval/approvalCreateForFolder';

export default {
  type: ApprovalTC,
  args: {
    folderId: FolderID.NonNull,
    approval: ApprovalCreateInput.NonNull,
  },
  resolve: (_, args, context) => {
    return approvalCreateForFolder(args, context);
  },
} as FieldConfig<CreateArgs>;
