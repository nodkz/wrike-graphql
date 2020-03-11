import composeWithJson from 'graphql-compose-json';
import { findById } from 'app/vendor/user/findById';
import { UserTC } from './UserTC';

const restApiResponse = {
  id: 'IEADMUW4KQOE4AQG',
  accountId: 'IEADMUW4',
  title: 'Write GraphQL wrapper for TaskList',
  description: '',
  briefDescription: '',
  parentIds: ['IEADMUW4I4OE374R'],
  superParentIds: [],
  sharedIds: ['KUAHMNRA', 'KX73NL7C'],
  shareds: () => ({
    type: () => [UserTC],
    resolve: (s) => Promise.all(s.sharedIds.map((id) => findById({ id }))),
    projection: { sharedIds: 1 },
  }),
  responsibleIds: ['KUAHMNRA'],
  responsibles: () => ({
    type: () => [UserTC],
    resolve: (s) => Promise.all(s.responsibleIds.map((id) => findById({ id }))),
    projection: { responsibleIds: 1 },
  }),
  status: 'Active',
  importance: 'Normal',
  createdDate: '2020-03-06T14:47:33Z',
  updatedDate: '2020-03-06T15:06:53Z',
  dates: {
    type: 'Backlog',
  },
  scope: 'WsTask',
  authorIds: ['KUAHMNRA'],
  authors: () => ({
    type: () => [UserTC],
    resolve: (s) => Promise.all(s.authorIds.map((id) => findById({ id }))),
    projection: { authorIds: 1 },
  }),
  customStatusId: 'IEADMUW4JMAAAAAA',
  hasAttachments: false,
  permalink: 'https://www.wrike.com/open.htm?id=474874374',
  priority: '07e92c008000000000006c00',
  followedByMe: true,
  followerIds: ['KUAHMNRA'],
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
