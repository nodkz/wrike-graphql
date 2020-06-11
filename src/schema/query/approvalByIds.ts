import { FieldConfig } from 'app/schema/definitions';
import { ApprovalID } from 'app/schema/types/Scalars';
import { ApprovalTC } from '../entities/ApprovalTC';
import { approvalFindByIds, FindByIdsOpts } from 'app/vendor/approval/approvalFindByIds';

export default {
  type: ApprovalTC.NonNull.List,
  args: {
    ids: ApprovalID.NonNull.List.NonNull,
  },
  resolve: (_, args, context) => {
    return approvalFindByIds(args, context);
  },
  extensions: {
    complexity: ({ args, childComplexity }) => childComplexity * (args.ids.length || 100),
  },
} as FieldConfig<FindByIdsOpts>;
