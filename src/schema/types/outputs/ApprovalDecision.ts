import { schemaComposer } from 'graphql-compose';
import { ApprovalDecisionStatusEnum } from '../Enums';
import { ContactID } from '../Scalars';
import { getRelationContactIds } from 'app/schema/relations/contact';

export const ApprovalDecision = schemaComposer.createObjectTC({
  name: 'ApprovalDecision',
  fields: {
    approverId: ContactID.NonNull,
    comment: {
      type: 'String!',
      description: 'Comment',
    },
    status: {
      type: ApprovalDecisionStatusEnum.NonNull,
      description: 'Status',
    },
    updatedDate: {
      type: 'Date!',
      description: 'Update date',
    },
  },
});

if (!process.env.DISABLE_RELATIONS) {
  ApprovalDecision.addFields({
    approver: () => getRelationContactIds('approverId'),
  });
}
