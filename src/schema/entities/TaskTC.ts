import { composeWithJson } from 'graphql-compose-json';
import { TaskStatusEnum, TaskImportanceEnum, TaskDatesTypeEnum } from '../types/Enums';
import {
  TaskID,
  ContactID,
  FolderID,
  CustomStatusID,
  DependencyID,
} from 'app/schema/types/Scalars';
import { getRelationFolderIds } from '../relations/folder';
import { getRelationContactIds } from '../relations/contact';
import { getRelationAccountId } from '../relations/account';
import { getRelationCommentsByTaskId } from '../relations/comment';
import { getRelationDependenciesByTaskId, getRelationDependencyIds } from '../relations/dependency';
import { getRelationTimelogsByTaskId } from '../relations/timelog';
import { getRelationAttachmentsByTaskId } from '../relations/attachment';
import { getRelationApprovalsByTaskId } from '../relations/approval';
import { KeyValue } from '../types/outputs/KeyValue';
import { CustomFieldValue } from '../types/outputs/CustomFieldValue';
import { getRelationTaskIds } from '../relations/task';

// https://developers.wrike.com/api/v4/tasks/
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
    duration: () => ({
      type: 'Int',
      description:
        'Duration in minutes. Duration is present in Planned tasks and is optional for Backlog tasks',
    }),
    start: () => 'Date',
    due: () => 'Date',
    workOnWeekends: false,
  },
  scope: 'WsTask',
  // authorIds: ['KUAHMNRA'],
  authorIds: ContactID.NonNull.List,
  // customStatusId: 'IEADMUW4JMAAAAAA',
  customStatusId: CustomStatusID,
  hasAttachments: true,
  attachmentCount: 5,
  permalink: 'https://www.wrike.com/open.htm?id=474874374',
  priority: '07e92c008000000000006c00',
  followedByMe: true,
  // followerIds: ['KUAHMNRA'],
  followerIds: ContactID.NonNull.List,
  recurrent: false,
  superTaskIds: TaskID.NonNull.List,
  subTaskIds: TaskID.NonNull.List,
  dependencyIds: DependencyID.NonNull.List,
  metadata: KeyValue.NonNull.List,
  customFields: CustomFieldValue.NonNull.List,
};

export const TaskTC = composeWithJson('Task', restApiResponse);

if (!process.env.DISABLE_RELATIONS) {
  TaskTC.addFields({
    account: () => getRelationAccountId('accountId'),
    parents: () => getRelationFolderIds('parentIds'),
    superParents: () => getRelationFolderIds('superParentIds'),
    shareds: () => getRelationContactIds('sharedIds'),
    responsibles: () => getRelationContactIds('responsibleIds'),
    authors: () => getRelationContactIds('authorIds'),
    followers: () => getRelationContactIds('followerIds'),
    superTasks: () => getRelationTaskIds('superTaskIds'),
    subTasks: () => getRelationTaskIds('subTaskIds'),
    dependencies: () => getRelationDependencyIds('dependencyIds'),
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
