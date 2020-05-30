import { schemaComposer } from 'graphql-compose';
import {
  TaskID,
  FolderID,
  ContactID,
  DateYMD,
  AttachmentID,
  ApprovalID,
} from 'app/schema/types/Scalars';
import { ApprovalTypeEnum } from '../types/Enums';
import { ApprovalDecision } from '../types/outputs/ApprovalDecision';

export const ApprovalTC = schemaComposer.createObjectTC({
  name: 'Approval',
  fields: {
    id: ApprovalID.NonNull,
    taskId: {
      type: TaskID,
      description: 'ID of task. Only one of taskId/folderId fields is present',
    },
    folderId: {
      type: FolderID,
      description: 'ID of folder/project. Only one of taskId/folderId fields is present',
    },
    authorId: {
      type: ContactID.NonNull,
      description: 'ID of user who created approval',
    },
    title: {
      type: 'String!',
      description: 'Title. Empty by default, set via workflow automation or by user on the portal',
    },
    description: {
      type: 'String',
      description: 'Description',
    },
    updatedDate: {
      type: 'Date!',
      description: 'Update date',
    },
    dueDate: {
      type: DateYMD,
      description: 'Due date, if exists',
    },
    decisions: {
      type: ApprovalDecision.NonNull.List,
      description: '',
    },
    attachmentIds: {
      type: AttachmentID.NonNull.List,
      description: 'ID of root attachments in review',
    },
    type: {
      type: ApprovalTypeEnum.NonNull,
      description: 'Approval type',
    },
    autoFinishOnApprove: {
      type: 'Boolean!',
      description: 'Is approval would be finished automatically on reaching Approved status',
    },
    autoFinishOnReject: {
      type: 'Boolean!',
      description: 'Is approval would be finished automatically on reaching Rejected status',
    },
    finished: {
      type: 'Boolean!',
      description: 'Is approval finished',
    },
    finisherId: {
      type: ContactID,
      description: 'ID of user who finished approval',
    },
  },
});

if (!process.env.DISABLE_RELATIONS) {
  ApprovalTC.addFields({});
}
