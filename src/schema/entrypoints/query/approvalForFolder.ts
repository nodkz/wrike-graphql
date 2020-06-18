import { FieldConfig } from 'app/schema/definitions';
import { FolderID } from 'app/schema/types/Scalars';
import { ApprovalTC } from 'app/schema/entities/ApprovalTC';
import { approvalForFolder, FindManyOpts } from 'app/vendor/approval/approvalForFolder';

export default {
  type: ApprovalTC.NonNull.List,
  description: 'Reads all approvals on folder/project.',
  args: {
    folderId: FolderID.NonNull,
  },
  resolve: (_, args, context) => {
    return approvalForFolder(args, context);
  },
  extensions: {
    complexity: ({ childComplexity }) => childComplexity * 10,
  },
} as FieldConfig<FindManyOpts>;
