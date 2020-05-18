import { composeWithJson } from 'graphql-compose-json';
import { userFindById } from 'app/vendor/user/userFindById';
import { folderFindByIds } from 'app/vendor/folder/folderFindByIds';
import { accountFindOne } from 'app/vendor/account/accountFindOne';
import { UserTC } from './UserTC';
import { TaskStatusEnum, TaskImportanceEnum, TaskDatesTypeEnum } from '../types/Enums';
import { TaskID, ContactID, FolderID, CustomStatusID } from 'app/schema/types/Scalars';
import { FolderTC } from './FolderTC';
import { AccountTC } from './AccountTC';
import { contactFindByIds } from 'app/vendor/contact/contactFindByIds';
import { ContactTC } from './ContactTC';

const restApiResponse = {
  // id: 'IEADMUW4KQOE4AQG',
  id: TaskID.NonNull,
  accountId: 'IEADMUW4',
  account: () => ({
    type: () => AccountTC,
    resolve: (s, _, __, info) => accountFindOne({ info }),
  }),
  title: 'Write GraphQL wrapper for TaskList',
  description: '',
  briefDescription: '',
  // parentIds: ['IEADMUW4I4OE374R'],
  parentIds: FolderID.NonNull.List,
  parents: () => ({
    type: () => FolderTC.NonNull.List,
    resolve: (s, _, __, info) => folderFindByIds({ ids: s.parentIds, info }),
    projection: { parentIds: 1 },
  }),
  superParentIds: FolderID.NonNull.List,
  superParents: () => ({
    type: () => FolderTC.NonNull.List,
    resolve: (s, _, __, info) => folderFindByIds({ ids: s.superParentIds, info }),
    projection: { superParentIds: 1 },
  }),
  // sharedIds: ['KUAHMNRA', 'KX73NL7C'],
  sharedIds: ContactID.NonNull.List,
  shareds: () => ({
    type: () => ContactTC.NonNull.List,
    resolve: (s, _, __, info) => contactFindByIds({ ids: s.sharedIds, info }),
    prjection: { sharedIds: 1 },
  }),
  // responsibleIds: ['KUAHMNRA'],
  responsibleIds: ContactID.NonNull.List,
  responsibles: () => ({
    type: () => UserTC.NonNull.List,
    resolve: (s) => Promise.all(s.responsibleIds.map((id) => userFindById({ id }))),
    projection: { responsibleIds: 1 },
  }),
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
  authors: () => ({
    type: () => UserTC.NonNull.List,
    resolve: (s) => Promise.all(s.authorIds.map((id) => userFindById({ id }))),
    projection: { authorIds: 1 },
  }),
  // customStatusId: 'IEADMUW4JMAAAAAA',
  customStatusId: CustomStatusID,
  hasAttachments: false,
  permalink: 'https://www.wrike.com/open.htm?id=474874374',
  priority: '07e92c008000000000006c00',
  followedByMe: true,
  // followerIds: ['KUAHMNRA'],
  followerIds: ContactID.NonNull.List,
  followers: () => ({
    type: () => UserTC.NonNull.List,
    resolve: (s) => Promise.all(s.followerIds.map((id) => userFindById({ id }))),
    projection: { followerIds: 1 },
  }),
  superTaskIds: [],
  subTaskIds: [],
  dependencyIds: [],
  metadata: [],
  customFields: [],
};

export const TaskTC = composeWithJson('Task', restApiResponse);
