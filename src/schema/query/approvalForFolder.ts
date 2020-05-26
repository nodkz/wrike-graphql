import { FieldConfig } from 'app/schema/definitions';
import { FolderID } from '../types/Scalars';
import { ApprovalTC } from '../entities/ApprovalTC';
import { approvalForFolder, FindManyOpts } from 'app/vendor/approval/approvalForFolder';

export default {
  type: ApprovalTC.NonNull.List,
  description: 'Reads all approvals on folder/project.',
  args: {
    folderId: FolderID.NonNull,
  },
  resolve: (_, args) => {
    return approvalForFolder(args);
  },
} as FieldConfig<FindManyOpts>;
