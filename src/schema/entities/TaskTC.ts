import { composeWithJson } from 'graphql-compose-json';
import { TaskStatusEnum, TaskImportanceEnum, TaskDatesTypeEnum } from '../types/Enums';
import { TaskID, ContactID, FolderID, CustomStatusID } from 'app/schema/types/Scalars';
import { getRelationFolderIds } from '../resolvers/folder';
import { getRelationContactIds } from '../resolvers/contact';
import { getRelationAccountId } from '../resolvers/account';
import { getRelationCommentsByTaskId } from '../resolvers/comment';
import { getRelationDependenciesByTaskId } from '../resolvers/dependency';
import { getRelationTimelogsByTaskId } from '../resolvers/timelog';
import { getRelationAttachmentsByTaskId } from '../resolvers/attachment';
import { getRelationApprovalsByTaskId } from '../resolvers/approval';

const restApiResponse = {
  // id: 'IEADMUW4KQOE4AQG',
  id: TaskID.NonNull,
  accountId: 'IEADMUW4',
  title: 'Write GraphQL wrapper for TaskList',
  description: '',
  briefDescription: '',
  // parentIds: ['IEADMUW4I4OE374R'],
  parentIds: FolderID.NonNull.List,
  superParentIds: FolderID.NonNull.List,
  // sharedIds: ['KUAHMNRA', 'KX73NL7C'],
  sharedIds: ContactID.NonNull.List,
  // responsibleIds: ['KUAHMNRA'],
  responsibleIds: ContactID.NonNull.List,
  // status: 'Active',
  status: TaskStatusEnum,
  // importance: 'Normal',
  importance: TaskImportanceEnum,
  createdDate: '2020-03-06T14:47:33Z',
  updatedDate: '2020-03-06T15:06:53Z',
  dates: {
    type: TaskDatesTypeEnum,
  },
  scope: 'WsTask',
  // authorIds: ['KUAHMNRA'],
  authorIds: ContactID.NonNull.List,
  // customStatusId: 'IEADMUW4JMAAAAAA',
  customStatusId: CustomStatusID,
  hasAttachments: false,
  permalink: 'https://www.wrike.com/open.htm?id=474874374',
  priority: '07e92c008000000000006c00',
  followedByMe: true,
  // followerIds: ['KUAHMNRA'],
  followerIds: ContactID.NonNull.List,
  // TODO: Починить следующие поля
  superTaskIds: [],
  subTaskIds: [],
  dependencyIds: [],
  metadata: [],
  customFields: [],
};

export const TaskTC = composeWithJson('Task', restApiResponse);

if (!process.env.DISABLE_RELATIONS) {
  TaskTC.addFields({
    account: getRelationAccountId('accountId'),
    parents: getRelationFolderIds('parentIds'),
    superParents: getRelationFolderIds('superParentIds'),
    shareds: getRelationContactIds('sharedIds'),
    responsibles: getRelationContactIds('responsibleIds'),
    authors: getRelationContactIds('authorIds'),
    followers: getRelationContactIds('followerIds'),
  });
}

if (!process.env.DISABLE_BACK_RELATIONS) {
  TaskTC.addFields({
    comments: getRelationCommentsByTaskId('id'),
    dependencies: getRelationDependenciesByTaskId('id'),
    timelogs: getRelationTimelogsByTaskId('id'),
    attachments: getRelationAttachmentsByTaskId('id'),
    approvals: getRelationApprovalsByTaskId('id'),
  });
}
