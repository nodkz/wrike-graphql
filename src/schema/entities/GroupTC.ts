import { composeWithJson } from 'graphql-compose-json';
import { GroupID, ContactID, AccountID } from 'app/schema/types/Scalars';
import { KeyValueTC } from '../types/KeyValueTC';

const restApiResponse = {
  id: () => GroupID,
  accountId: () => AccountID,
  title: 'New test group',
  memberIds: () => ContactID.List,
  childIds: () => ContactID.List,
  parentIds: () => ContactID.List,
  avatarUrl: '/98/14/Circle_ffe9c7a0_78-71_v1.png',
  myTeam: true,
  metadata: () => KeyValueTC.List,
};

export const GroupTC = composeWithJson('Group', restApiResponse);
