import { FieldConfig } from 'app/schema/definitions';
import { DateTimeRangeInput } from '../types/inputs/DateTimeRangeInput';
import { ContactID } from '../types/Scalars';
import { ApprovalFinalStatusEnum } from '../types/Enums';
import { ApprovalTC } from '../entities/ApprovalTC';
import { approvalFindMany, FindManyOpts } from 'app/vendor/approval/approvalFindMany';

export default {
  type: ApprovalTC.NonNull.List,
  args: {
    limit: {
      type: 'Int',
      description: 'Limit on number of returned approvals',
    },
    pageSize: {
      type: 'Int',
      description: 'Page size',
    },
    nextPageToken: {
      type: 'String',
      description: 'Next page token, overrides any other parameters in request',
    },
    filter: ApprovalTC.schemaComposer.createInputTC({
      name: 'ApprovalFindManyFilter',
      fields: {
        statuses: ApprovalFinalStatusEnum,
        updatedDate: DateTimeRangeInput,
        approvers: ContactID.NonNull.List,
        pendingApprovers: ContactID.NonNull.List,
      },
    }),
  },
  resolve: (_, args) => {
    return approvalFindMany(args);
  },
  extensions: {
    complexity: ({ args, childComplexity }) =>
      childComplexity * (args.limit || args.pageSize || 100),
  },
} as FieldConfig<FindManyOpts>;
