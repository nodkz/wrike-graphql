import { composeWithJson } from 'graphql-compose-json';
import { findById } from 'app/vendor/user/findById';
import { UserTC } from './UserTC';
import { TaskStatusEnum, TaskImportanceEnum, TaskDatesTypeEnum } from '../types/TaskEnums';
import { TaskID, ContactID, FolderID, CustomStatusID } from 'app/schema/types/Scalars';

const restApiResponse = {
  // id: 'IEADMUW4KQOE4AQG',
  id: () => TaskID,
  accountId: 'IEADMUW4',
  title: 'Write GraphQL wrapper for TaskList',
  description: '',
  briefDescription: '',
  // parentIds: ['IEADMUW4I4OE374R'],
  parentIds: () => [FolderID],
  superParentIds: [],
  // sharedIds: ['KUAHMNRA', 'KX73NL7C'],
  sharedIds: () => [ContactID],
  shareds: () => ({
    type: () => [UserTC],
    resolve: (s) => Promise.all(s.sharedIds.map((id) => findById({ id }))),
    projection: { sharedIds: 1 },
  }),
  // responsibleIds: ['KUAHMNRA'],
  responsibleIds: () => [ContactID],
  responsibles: () => ({
    type: () => [UserTC],
    resolve: (s) => Promise.all(s.responsibleIds.map((id) => findById({ id }))),
    projection: { responsibleIds: 1 },
  }),
  // status: 'Active',
  status: () => TaskStatusEnum,
  // importance: 'Normal',
  importance: () => TaskImportanceEnum,
  createdDate: '2020-03-06T14:47:33Z',
  updatedDate: '2020-03-06T15:06:53Z',
  dates: {
    type: () => TaskDatesTypeEnum,
  },
  scope: 'WsTask',
  // authorIds: ['KUAHMNRA'],
  authorIds: () => [ContactID],
  authors: () => ({
    type: () => [UserTC],
    resolve: (s) => Promise.all(s.authorIds.map((id) => findById({ id }))),
    projection: { authorIds: 1 },
  }),
  // customStatusId: 'IEADMUW4JMAAAAAA',
  customStatusId: () => CustomStatusID,
  hasAttachments: false,
  permalink: 'https://www.wrike.com/open.htm?id=474874374',
  priority: '07e92c008000000000006c00',
  followedByMe: true,
  // followerIds: ['KUAHMNRA'],
  followerIds: () => [ContactID],
  followers: () => ({
    type: () => [UserTC],
    resolve: (s) => Promise.all(s.followerIds.map((id) => findById({ id }))),
    projection: { followerIds: 1 },
  }),
  superTaskIds: [],
  subTaskIds: [],
  dependencyIds: [],
  metadata: [],
  customFields: [],
};

export const TaskTC = composeWithJson('Task', restApiResponse);
