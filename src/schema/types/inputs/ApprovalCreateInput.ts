import { ApprovalTC } from 'app/schema/entities/ApprovalTC';
import { DateYMD, ContactID, AttachmentID } from '../Scalars';

export const ApprovalCreateInput = ApprovalTC.schemaComposer.createInputTC({
  name: 'ApprovalCreateInput',
  fields: {
    description: {
      type: 'String',
      description: 'Description',
    },
    dueDate: {
      type: DateYMD,
      description: 'Due date, if exists',
    },
    approvers: {
      type: ContactID.NonNull.List,
      description: 'Assign approvers',
    },
    attachments: {
      type: AttachmentID.NonNull.List,
      description: 'List of root attachments to set in approval',
    },
    autoFinishOnApprove: {
      type: 'Boolean',
      description: 'Is approval would be finished automatically on reaching Approved status',
    },
    autoFinishOnReject: {
      type: 'Boolean',
      description: 'Is approval would be finished automatically on reaching Rejected status',
    },
  },
});
