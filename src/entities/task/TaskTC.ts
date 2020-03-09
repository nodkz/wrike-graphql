import composeWithJson from 'graphql-compose-json';

const restApiResponse = {
  id: 'IEADMUW4KQOE4AQG',
  accountId: 'IEADMUW4',
  title: 'Write GraphQL wrapper for TaskList',
  description: '',
  briefDescription: '',
  parentIds: ['IEADMUW4I4OE374R'],
  superParentIds: [],
  sharedIds: ['KUAHMNRA', 'KX73NL7C'],
  responsibleIds: ['KUAHMNRA'],
  status: 'Active',
  importance: 'Normal',
  createdDate: '2020-03-06T14:47:33Z',
  updatedDate: '2020-03-06T15:06:53Z',
  dates: {
    type: 'Backlog',
  },
  scope: 'WsTask',
  authorIds: ['KUAHMNRA'],
  customStatusId: 'IEADMUW4JMAAAAAA',
  hasAttachments: false,
  permalink: 'https://www.wrike.com/open.htm?id=474874374',
  priority: '07e92c008000000000006c00',
  followedByMe: true,
  followerIds: ['KUAHMNRA'],
  superTaskIds: [],
  subTaskIds: [],
  dependencyIds: [],
  metadata: [],
  customFields: [],
};

export const TaskTC = composeWithJson('Task', restApiResponse);
