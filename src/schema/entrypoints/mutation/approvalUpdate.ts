import { FieldConfig } from 'app/schema/definitions';
import { ApprovalID, DateYMD } from 'app/schema/types/Scalars';
import { ApprovalTC } from 'app/schema/entities/ApprovalTC';
import { approvalUpdate, UpdateArgs } from 'app/vendor/approval/approvalUpdate';

const ApprovalUpdateInput = ApprovalTC.schemaComposer.createInputTC({
  name: 'ApprovalUpdateInput',
  fields: {
    description: {
      type: 'String',
      description: 'Description',
    },
    dueDate: {
      type: DateYMD,
      description: 'Due date, if exists',
    },
    autoFinishOnApprove: {
      type: 'Boolean!',
      description: 'Is approval would be finished automatically on reaching Approved status',
    },
    autoFinishOnReject: {
      type: 'Boolean!',
      description: 'Is approval would be finished automatically on reaching Rejected status',
    },
  },
});

export default {
  type: ApprovalTC,
  args: {
    id: ApprovalID.NonNull,
    approval: ApprovalUpdateInput.NonNull,
  },
  resolve: (_, args, context) => {
    return approvalUpdate(args, context);
  },
} as FieldConfig<UpdateArgs>;
